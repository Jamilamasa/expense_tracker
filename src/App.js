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
  const showModal = (modalType) => {
    setModal({ status: true, type: modalType });
  };
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
  return (
   
    <div>
      
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route  element={<Protect isLogged={isLogged} setislogged={setislogged}><MainExpense /></Protect>} path="/expense"></Route>
        <Route path="/sign-up" element={<Login/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path='*' element={<div className='font-bold text-6xl text-red-600 text-center mt-[50vh]'>404 Error: Page not found</div>} />
      </Routes>
      
    </div>
  );
}

export default App;
