import { useState } from "react";
import Mobilmenu from "./components/Mobilmenu";
import Header from "./components/Header";
// import Planetdatafooter from "./components/Planetdatafooter";
import { Route, Routes } from "react-router-dom";
import PlanetsPage from "./Pages/PlanetsPage";
import planetsData from "./data.json";

function App() {
  const [activMenu, setActivMenu] = useState(false);

  const openCloseMenu = () => {
    setActivMenu(!activMenu);
  };
  return (
    <div className=" h-[950px]">
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

          <Route path="/" element={!activMenu ? <Mobilmenu /> : null} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
