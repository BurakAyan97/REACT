import Course from "./Course";

function Courses({ courses, removeCourse }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course} //Spread ile objenin içindeki her şeyi gönderebiliyoruz.Props kullanmaya gerek yok amele gibi.
              removeOneCourse={removeCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
