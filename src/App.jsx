import { useState } from "react";
import Mobilmenu from "./components/Mobilmenu";
import Header from "./components/Header";
import Planetdatafooter from "./components/Planetdatafooter";
import { Route, Routes, useParams } from "react-router-dom";
import PlanetsPage from "./Pages/PlanetsPage";
import planetsData from "./data.json";
// import menuIcon from "./assets/icon-hamburger.svg";

function App() {
  const { name } = useParams();

  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === name
  );

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
        {activMenu ? (
          <Mobilmenu
            openCloseMenu={openCloseMenu}
            activMenu={activMenu}
            setActivMenu={setActivMenu}
          />
        ) : null}

        <Routes>
          <Route
            path="/:nameId"
            element={<PlanetsPage planetsData={planetsData} />}
          />
        </Routes>
      </div>
      {!activMenu ? <Planetdatafooter planetsData={planetsData} /> : null}
    </div>
  );
}

export default App;
