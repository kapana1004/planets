import { useState } from "react";
import Mobilmenu from "./components/Mobilmenu";
import Header from "./components/Header";
import Planetdatafooter from "./components/Planetdatafooter";
import { Route, Routes } from "react-router-dom";
import PlanetsPage from "./Pages/PlanetsPage";
import planetsData from "./data.json";
// import menuIcon from "./assets/icon-hamburger.svg";

function App() {
  const [activMenu, setActivMenu] = useState(false);
  const openCloseMenu = () => {
    setActivMenu(!activMenu);
  };
  return (
    <div>
      <Header
        openCloseMenu={openCloseMenu}
        activMenu={activMenu}
        setActivMenu={setActivMenu}
      />

      <div>
        {activMenu ? <Mobilmenu planetsData={planetsData} /> : null}

        <Routes>
          <Route
            path="mercury"
            element={<PlanetsPage planetsData={planetsData} />}
          />
        </Routes>
      </div>
      {!activMenu ? <Planetdatafooter /> : null}
    </div>
  );
}

export default App;
