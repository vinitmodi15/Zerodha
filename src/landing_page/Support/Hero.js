import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" >
      <div className=" p-5" id="supportWrapper">
        <h4 className="fs-4">Support Portal</h4>
        <a
          href=""
          className="fs-4"
          style={{ color: "white", textDecoration: "none" }}
        >
          Track Tickets
        </a>
      </div>
      <div className="row  p-3" id="inputEle">
        <div className="col-6">
          <h2 className="fs-5">Search for an answer or browse help topics to create a ticket</h2>
          <input 
            style={{ borderRadius: "10px" }}
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
          />
          <br></br>
          <a href="" style={{lineHeight:3, marginRight:"10px"}}>Track account opening</a>
          <a href="" style={{lineHeight:3, marginRight:"10px"}}>Track segment activation </a>
          <a href="" style={{lineHeight:3, marginRight:"10px"}}>Intraday margins</a> <br></br>
          <a href="" style={{lineHeight:3, marginRight:"10px"}}> Kite user manual</a>
        </div>
        <div className="col-6 p-4">
          <h1 className="fs-5">Featured</h1>
          <ol>
            <li>
              {" "}
              <a href="" style={{lineHeight:4,fontSize:"15px"}} >Surveillance measure on scrips - August 2024</a>
            </li>
            <li>
              {" "}
              <a href="" style={{lineHeight:4,fontSize:"15px"}} >Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
