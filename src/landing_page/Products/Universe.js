import React from "react";

function Universe() {
  return (
    <div className="container col-8 mt-5 " >
      <div className="row text-center">
        <div className="text-center mt-3">
          <h2 className="text-muted">The Zerodha Universe</h2>
          <p className="mt-4">
            Extend your trading and investment experience even further with our
            partner platforms.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 " >
            <img src="media/images/smallcaseLogo.png" alt="smallcase" />
            <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/streakLogo.png" alt="smallcase" style={{height:"3rem",}}/>
            <p className="text-small text-muted mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/sensibullLogo.svg" alt="smallcase" style={{height:"3rem",}} />
            <p className="text-small text-muted mt-3 ">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/zerodhaFundHouse.png" alt="smallcase" style={{height:"3rem",}} />
            <p className="text-small text-muted mt-3">Asset management</p>
        </div>

        <div className="col-4 p-3 mt-5">
            <img src="media/images/tijori.svg" alt="smallcase" style={{height:"3rem",}}/>
            <p className="text-small text-muted mt-3">Fundamental research platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/dittoLogo.png" alt="smallcase"style={{height:"3rem",}} />
            <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        <button className='p-3 btn btn-primary fs-5 mt-5 mb-5' style={{width:"15%",margin:"0 auto",}}>Sign up now </button>
      </div>
    </div>
  );
}

export default Universe;
