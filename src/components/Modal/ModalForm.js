import React from 'react'

const ModalForm = () => {
  return (
    <form>
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="dd/mm/yyyy"
            ></input>
            <label htmlFor="date">Date</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Food"
            ></input>
            <label htmlFor="description">Description</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="20000"
            ></input>
            <label htmlFor="amount">Amount</label>
          </div>
        </form>
  )
}

export default ModalForm