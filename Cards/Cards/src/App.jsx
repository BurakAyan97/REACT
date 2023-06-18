import { useState } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  const [count, setCount] = useState(0); //state diyorlar buna.
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    //Bulmadan yapıyoruz sitesinden aldık class isimlerini
    <div className="App">
      <div>
        <button onClick={handleClick}>Kurs Ekle</button>
        <div>Kurs Sayısı:{count}</div>
      </div>
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui tempora cupiditate voluptatum placeat nisi libero repellendus atque, error, aut voluptate nostrum maiores magnam eveniet nobis neque excepturi, dolore illo."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui tempora cupiditate voluptatum placeat nisi libero repellendus atque, error, aut voluptate nostrum maiores magnam eveniet nobis neque excepturi, dolore illo."
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Komple Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui tempora cupiditate voluptatum placeat nisi libero repellendus atque, error, aut voluptate nostrum maiores magnam eveniet nobis neque excepturi, dolore illo."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Frontend"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui tempora cupiditate voluptatum placeat nisi libero repellendus atque, error, aut voluptate nostrum maiores magnam eveniet nobis neque excepturi, dolore illo."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
