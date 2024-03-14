import "./App.css";
import "./css/sidebar.css";
import "./css/carPage.css";
import HeadPopover from "./components/HeadPopover";
import Sidebar from "./components/sidebar";
import CarPage from "./components/carPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnitInfo from "./components/unitInfo";

function App() {
  return (
    <div className="app-container">
      <Sidebar className="side-bar" />
      <div
        className="app-body-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="app-header">
          <HeadPopover />
        </div>
        <div className="app-body">
          <Router>
            <Routes>
              <Route path="/car-page" element={<CarPage />} />
              <Route path="/apartments" element={<UnitInfo />} />
            </Routes>
          </Router>
        </div>
        <div className="app-footer"></div>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <Tryout />
//       <Sidebar />
//     </>
//   );
// }

// export default App;
