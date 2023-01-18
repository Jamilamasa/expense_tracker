import React from "react";

export default function NetOutput() {
  return (
    
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Net Profit: <span id="netProfit"></span>
          </h5>
          <h5>
            %: <span id="percentProfit"></span>
          </h5>
          <p className="card-text">
            Remark: <span id="remark"></span>
          </p>
        </div>
      </div>
  
  );
}
