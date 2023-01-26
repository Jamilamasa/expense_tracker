import React, { useState } from "react";

const Modal = (props) => {
  const [inputData, setInputData] = useState({
    date: "",
    description: "",
    amount: "",
  });
  const inputDateHandler = (e) => {
    setInputData((prevData) => {
      return { ...prevData, date: e.target.value };
    });
  };
  const inputDescriptionHandler = (e) => {
    setInputData((prevData) => {
      return { ...prevData, description: e.target.value };
    });
  };
  const inputAmountHandler = (e) => {
    setInputData((prevData) => {
      return { ...prevData, amount: e.target.value };
    });
  };
  const addExpenseHandler = (e) => {
    e.target.className.includes("incomeBtn") && props.onAddExpense({ ...inputData, transaction: "income" });
    e.target.className.includes("expenseBtn") && props.onAddExpense({ ...inputData, transaction: "expense" });
    props.onHideModal();
    
  };
  const hideModalHandler = () => {
    props.onHideModal();
  };

  return (
    <>
    <div className="backdrop"></div>
    <div className="card mt-3 position-absolute t-40 start-50 translate-middle w-50 m-auto">
      <div className="card-header display-6 fw-semibold">Add {props.type}</div>
      <div className="card-body">
        <form>
          <div className="form-floating mb-3">
            <input
              onChange={inputDateHandler}
              value={inputData.date}
              type="date"
              className="form-control"
              id="date"
              placeholder="dd/mm/yyyy"
            ></input>
            <label htmlFor="date">Date</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={inputDescriptionHandler}
              value={inputData.description}
              type="text"
              className="form-control"
              id="description"
              placeholder="Food"
            ></input>
            <label htmlFor="description">Description</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={inputAmountHandler}
              value={inputData.amount}
              type="number"
              className="form-control"
              id="amount"
              placeholder="20000"
            ></input>
            <label htmlFor="amount">Amount</label>
          </div>
        </form>
      </div>
      <div className="card-footer">
        <div className="btn-group float-end btn-group-lg" role="group">
          <button
            type="button"
            onClick={hideModalHandler}
            className="btn btn-secondary"
          >
            Close
          </button>
          <button
            type="button"
            onClick={addExpenseHandler}
            className={`btn btn-primary${
              props.type === "income" ? " incomeBtn" : " expenseBtn"
            }`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Modal;
