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
    <div className=" min-h-[100vh] min-w-[100vw]">
      {/* <Header
        openCloseMenu={openCloseMenu}
        activMenu={activMenu}
        setActivMenu={setActivMenu}
        planetsData={planetsData}
      /> */}

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
                  openCloseMenu={openCloseMenu}
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
