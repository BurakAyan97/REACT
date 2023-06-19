import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)]; //0 ile 4 arasında random sayı oluşturmak için yaptık.
}
function App() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); //coursesin içine geleni at.
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Kurs Ekle
      </button>
      {/* {} = jsx şeklinde yazmak demektir. Bİzim razor sytnax gibi düşün. Aksiyonları içine yazıyoruz */}
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
