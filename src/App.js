import "./App.css";
import Controls from "./components/Controls";
import NavBar from "./components/NavBar";
import NetOutput from "./components/NetOutput";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <NavBar />
      <div className="body p-3 overflow-hidden">
        <div className="row gx-3">
          <Controls />
          <div className="col flex3 vh-89 overflow-auto">
            <Table />
          </div>
          <div className="col overflow-hidden" id="outputNet">
            <NetOutput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
