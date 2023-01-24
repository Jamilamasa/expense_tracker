import React from "react";
import ModalForm from "./ModalForm";

const Modal = (props) => {
  const hideModalHandler = () => {
    props.onHideModal()
  }
  return (
    <div className="card mt-3 position-absolute t-40 start-50 translate-middle w-50 m-auto">
      <div className="card-header display-6 fw-semibold">Add {props.type}</div>
      <div className="card-body">
        <ModalForm />
      </div>
      <div className="card-footer">
        <div
          className="btn-group float-end btn-group-lg"
          role="group"
        >
          <button type="button" onClick={hideModalHandler} className="btn btn-secondary">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
