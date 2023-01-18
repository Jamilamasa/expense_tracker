import React from "react";

const MobilePrompt = () => {
  return (
    <div className="card mobilePrompt">
      <div className="card-body mobilePrompt">
        <h5 className="card-title mobilePrompt">Unavailable</h5>
        <h6 className="card-subtitle mb-2 text-muted mobilePrompt">
          This site is unavailable
        </h6>
        <p className="card-text mobilePrompt">
          This is a desktop application, try opening it on a device with a
          larger screen
        </p>
      </div>
    </div>
  );
};

export default MobilePrompt;
