import React from "react";
import { Link, Outlet } from "react-router-dom";

function History() {
  return (
    <>
      <div>History</div>
      <nav>
        <Link to="company">Our Companies</Link>
        <Link to="team">Team</Link>
      </nav>
      <Outlet />
    </>
  );
}
//İç içe route nerde tanımlıyorsan Outlet kullanman lazım yoksa wrongpath veriyor. Bir de / işareti kullanırsan da hata veriyor. İç içe routelarda kendisi yerleştiriyor.
export default History;
