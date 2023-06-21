import { useState } from "react";
function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");

  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value); //inputa değer girince orda kalmasını sağladık. event.target.value inputun içindeki değeri temsil ediyordu hatırla!!
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Sayfanın refreshlenmesini engeller
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc); //App.jsx e değerleri göndermek için hazırladığımız props.Method veya fonksiyon değil dikkat et!!!.Title ve taskDesc gönderiyoruz.
    }
    setTitle("");
    setTaskDesc(""); //Oluştura tıklayınca inputları boş string yapıyoruz.
  };

  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Taskı Düzenleyiniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            ></textarea>
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Oluştur
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            ></textarea>
            <button className="task-button" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
