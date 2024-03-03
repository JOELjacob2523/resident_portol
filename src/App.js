import "./App.css";
import "./css/sidebar.css";
import "./css/carPage.css";
import HeadPopover from "./components/HeadPopover";
import Sidebar from "./components/sidebar";
import CarPage from "./components/carPage";

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
          <CarPage />
        </div>
        <div className="app-footer">
          SafetyHood &copy;{new Date().getFullYear()} Created by SafetyHood
        </div>
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
