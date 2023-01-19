import React from "react";

export default function Controls(props) {
  const showExpenseModalHandler = ()=> {
    props.onShowModal("expense")
  }
  const showIncomeModalHandler = ()=> {
    props.onShowModal("income")
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5>
            Total Expense: <span id="totalExpense">0</span>
          </h5>
          <h5>
            Total Income: <span id="totalIncome">0</span>
          </h5>
        </div>
      </div>
      <div className="container mt-3">
        <button type="button" className="btn btn-danger m-0" id="addExpense" onClick={showExpenseModalHandler}>
          Add Expense
        </button>
        <button type="button" className="btn btn-success" id="addIncome" onClick={showIncomeModalHandler}>
          Add Income
        </button>
      </div>
    </div>
  );
}
