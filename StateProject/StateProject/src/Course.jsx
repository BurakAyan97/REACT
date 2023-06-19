import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import "./course.css";

const courseMap = {
  // Angular: Angular,
  // Bootstrap: Bootstrap,
  // Ccsharp: Ccsharp,
  // KompleWeb: KompleWeb,  Eğer isimler tamamen aynı ise aşağıdaki şekidle de yazabiliriz.Eşliyor kendisi.u
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};

function Course({ courseName }) {
  console.log(Angular);
  console.log(courseName);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
