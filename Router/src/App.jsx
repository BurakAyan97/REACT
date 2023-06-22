import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
// import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Mission from "../components/Mission";
import WrongPath from "../components/WrongPath";
import History from "../components/History";
import Company from "../components/Company";
import Team from "../components/Team";
import Menbers from "../components/Menbers";
import MemberDetail from "../components/MemberDetail";
import React from "react";
const LazyAboutUs = React.lazy(() => import("..components/AboutUs")); //Lazy Load yükleme yaptık karışık siteler için.

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
        <Route
          path="/aboutUs"
          element={
            <React.Suspense>
              <LazyAboutUs />
            </React.Suspense>
          }
        />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/members" element={<Menbers />} />
        <Route path="/members/:memberId" element={<MemberDetail />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}
// path="*" = tanımlananlar dışında bir adres yazılırsa burası çalışır
// /:memberId diyip oraya ne yazarsak yazalım MemberDetaile gider.
export default App;
