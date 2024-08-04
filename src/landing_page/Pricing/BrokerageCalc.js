import React from "react";

function BrokerageCalc() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 ">
          <h5 className="text-center">
            <a href="" className="fs-5" style={{textDecoration:"none"}}>Brokerage calculator</a>
          </h5>
          <ul className="text-muted mt-3  p-5 " style={{fontSize:"0.85rem",marginLeft:"35px"}}>
            <li className="mt-3">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mt-3">Digital contract notes will be sent via e-mail.</li>
            <li className="mt-3">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mt-3">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mt-3">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mt-3">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 ">
            <h4><a href="" className="fs-5" style={{textDecoration:"none"}}>List of charges</a></h4>
        </div>
      </div>
    </div>
  );
}

export default BrokerageCalc;
