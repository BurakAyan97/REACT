import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault(); //onSubmit methodunun çalıştığında sayfa yenilemesini kapatır.Bunu yazmadan önce can yazısı çıkıp gidiyordu aniden çünkü yenileniyordu sayfa otomatikman.(Bu bir event özelliğidir.)
    search(valueInput);
  };

  const handleChange = (event) => {
    //inputumda girdiğim değer(event.target.value). Ne yazarsak setValue ona güncelliyor kendini anlık olarak.
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchHeader;
