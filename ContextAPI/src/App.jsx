import { useState } from "react";
import "./App.css";
import AuthContext from "./Context/Auth-context";
import Auth from "./Auth";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  const loginAuth = () => {
    setAuthStatus(true);
  };

  return (
    //Provider içindeki tüm componentlere, provider için yazdığımız propsları taşıyabiliriz. Tek tek aşağı yukarı taşı yapmamıza gerek yok. value diyip istediğimiz propsları yazıyoruz.
    <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
