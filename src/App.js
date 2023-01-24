import { useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import NetOutput from "./components/NetOutput";
import Table from "./components/Table";

function App() {
  const [modal, setModal] = useState({ status: false, type: "" });
  const [expenses, setExpense] = useState([]);
  // Set modal visibility
  const showModal = (modalType) => {
    setModal({ status: true, type: modalType });
  };
  const hideModal = () => {
    setModal({ status: false, type: "" });
  };

  // Add expense to DS
  const addExpenseHandler = (newExpense) => {
    setExpense((prevExpense) => [newExpense, ...prevExpense]);
  };
  console.log(expenses)
  return (
    <div>
      <NavBar />
      <div className="body p-3 overflow-hidden">
        <div className="row gx-3">
          <div className="col flex1" id="controls">
            <Controls onShowModal={showModal} />
          </div>
          <div className="col flex3 vh-89 z-index-n2 overflow-auto">
            <Table expenses={expenses} />
          </div>
          <div className="col overflow-hidden" id="outputNet">
            <NetOutput />
          </div>
        </div>
      </div>
      {modal.status === true && (
        <Modal type={modal.type} onAddExpense={addExpenseHandler} onHideModal={hideModal} />
      )}
    </div>
  );
}

export default App;
