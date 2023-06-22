import { useContext } from "react";
import AuthContext from "./Context/Auth-context";

function Auth() {
  //Değerleri almak için yazdığımız kod.
  const { status, login } = useContext(AuthContext);

  return (
    <div>
      <h1>giriş yaptın mı?</h1>
      {status ? <p>Ohoo çoktan</p> : <p>Hayır</p>}
      <button onClick={login}>Giriş Yap</button>
    </div>
  );
}

export default Auth;
