import React from 'react'

export default function Controls() {
  return (
    <div className="col flex1" id="controls">
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
              <button
                type="button"
                className="btn btn-danger m-0"
                id="addExpense"
                data-bs-toggle="modal"
                data-bs-target="#addExpenseModal"
              >
                Add Expense
              </button>
              <button
                type="button"
                className="btn btn-success"
                id="addIncome"
                data-bs-toggle="modal"
                data-bs-target="#addIncomeModal"
              >
                Add Income
              </button>
            </div>
          </div>
  )
}
