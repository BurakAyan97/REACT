import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [can, setCan] = useState(0);
  const [tuba, setTuba] = useState(0);
  useEffect(() => {
    console.log("Her zaman çalışır");
  });
  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır daha da çalışmaz");
  }, []);
  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır . Can değerinde bir değişiklik olduğunda"
    );
  }, [can]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır . tuba değerinde bir değişiklik olduğunda"
    );
  }, [tuba]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır . Can veya tuba değerinde bir değişiklik olduğunda"
    );
  }, [can, tuba]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setCan(can + 1)}>Can ++</button>
        <div>Can:{can}</div>
      </div>
      <div>
        <button onClick={() => setTuba(can + 1)}>Tuba ++</button>
        <div>Tuba:{tuba}</div>
      </div>
    </div>
  );
}

export default App;
