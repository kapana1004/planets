import { useState } from "react";
import Mobilmenu from "./components/Mobilmenu";
import Header from "./components/Header";
// import Planetdatafooter from "./components/Planetdatafooter";
import { Route, Routes, Navigate } from "react-router-dom";
import PlanetsPage from "./Pages/PlanetsPage";
import planetsData from "./data.json";

function App() {
  const [activMenu, setActivMenu] = useState(false);

  const openCloseMenu = () => {
    setActivMenu(!activMenu);
  };
  return (
    <div className=" min-h-[100vh] ">
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
          <Route path="/" element={<Navigate to="/mercury" />} />
          {!activMenu ? (
            <Route
              path="/:nameId"
              element={
                <PlanetsPage
                  planetsData={planetsData}
                  activMenu={activMenu}
                  setActivMenu={setActivMenu}
                />
              }
            />
          ) : null}
        </Routes>
      </div>
    </div>
  );
}

export default App;
