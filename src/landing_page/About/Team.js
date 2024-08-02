import React from "react";

function Team() {
  return (
    <div className="container">
      <div className=" row text-center border-top p-5 mt-5">
        <h2>People</h2>
      </div>
      <div className="row">
        <div className="col-6 mt-3 mb-5">
          <img
            src="media/images/VINIT-JDATAI21004.jpg"
            alt="Vinit Modi"
            style={{
              height: "25rem",
              marginLeft: "10rem",
              borderRadius: "100%",
            }}
          />
          <p
            className="text-center mt-3 text-muted "
            style={{ marginLeft: "30px" }}
          >
            <b style={{ fontSize: "1.5rem" }}>Vinit Modi</b> <br />
            <p className="text-muted">Founder,CEO</p>
          </p>
        </div>
        <div className="col-6 p-5 mt-3">
          <p>
            Vinit bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA{" "}
            </a>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
