import React from "react";

export default function NetOutput({ expenses }) {

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

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Net Profit: <span id="netProfit">{profit}</span>
        </h5>
        <h5>
          %: <span id="percentProfit">{percentProfit}</span>
        </h5>
        <p className="card-text">
          Remark: <span id="remark">
            {profit > 0 ? "You are in profit" : "You are in loss"}
          </span>
        </p>
      </div>
    </div>

  );
}
