import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Controls from "./components/Controls";
import Login from "./components/Login";
import Modal from "./components/Modal";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";
import NetOutput from "./components/NetOutput";
import Table from "./components/Table";
import Protect from "./components/Protect";
import MainExpense from "./components/MainExpense";

function App() {
  const [modal, setModal] = useState({ status: false, type: "" });
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
  const expenses = [
    {
      id: 1,
      date: "30/20/23",
      description: "chow",
      amount: 3000,
      transaction: "income",
    },
    {
      id: 2,
      date: "30/20/23",
      description: "chow",
      amount: 2000,
      transaction: "expense",
    },
    {
      id: 3,
      date: "30/20/23",
      description: "chow",
      amount: 2000,
      transaction: "income",
    },
  ];
  const [isLogged,setislogged]=useState(true)

main
  return (
   
    <div>
      <NavBar />
      <div className="body p-3 overflow-hidden">
        <div className="row gx-3">
          <div className="col flex1" id="controls">
            <Controls onShowModal={showModal} expenses={expenses} />
          </div>
          <div className="col flex3 vh-89 z-index-n2 overflow-auto">
            <Table expenses={expenses} />
          </div>
          <div className="col overflow-hidden" id="outputNet">
            <NetOutput expenses={expenses} />
          </div>
        </div>
      </div>
      {modal.status === true && (
        <Modal type={modal.type} onAddExpense={addExpenseHandler} onHideModal={hideModal} />

      )}
      {modal.status === true && (<Modal type={modal.type}/>)}
      
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route  element={<Protect isLogged={isLogged} setislogged={setislogged}><MainExpense /></Protect>} path="/expense"></Route>
        <Route path="/sign-up" element={<Login/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path='*' element={<div className='font-bold text-6xl text-red-600 text-center mt-[50vh]'>404 Error: Page not found</div>} />





      <Routes>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignIn />}></Route>

      </Routes>

    </div>
  );
}

export default App;
