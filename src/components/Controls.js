import React from "react";

export default function Controls(props) {
  const showExpenseModalHandler = () => {
    props.onShowModal("expense")
  }
  const showIncomeModalHandler = () => {
    props.onShowModal("income")
  }

  const { expenses } = props

  let totalIncome = 0
  let totalExpense = 0
  const allIncome = expenses.filter((expense) => {

    return expense.transaction ===
      'income'

  })
  const allExpense = expenses.filter((expense) => {

    return expense.transaction ===
      'expense'

  })

  for (let i = 0; i < allIncome.length; i++) {
    totalIncome += parseInt(allIncome[i].amount)
  }
  for (let i = 0; i < allExpense.length; i++) {
    totalExpense += parseInt(allExpense[i].amount)
  }

  console.log(parseInt(totalIncome));



  let profit = totalIncome - totalExpense
  let percentProfit = (profit * 100) / totalIncome


  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5>
            Total Expense: <span id="totalExpense">&#8358;{totalExpense}</span>
          </h5>
          <h5>
            Total Income: <span id="totalIncome">&#8358;{totalIncome}</span>
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
