import React from 'react'

export default function Modal() {
  return (
    <div
        className="modal fade"
        id="addExpenseModal"
        tabIndex="-1"
        aria-labelledby="addExpenseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addExpenseModalLabel">
                Add Expense
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="dateInput"
                  placeholder="date"
                ></input>
                <label htmlFor="dateInput">Date</label>
                <div className="invalid-feedback">
                  Date must be in dd/mm/yyyy format
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="descriptionInput"
                  placeholder="Description"
                ></input>
                <label htmlFor="descriptionInput">Description</label>
                <div className="invalid-feedback">Please fill this field</div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="amountInput"
                  placeholder="date"
                ></input>
                <label htmlFor="amountInput">Amount</label>
                <div className="invalid-feedback">Please fill this field</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary addExpenseBtn">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
