import React from "react";

function KiteconnectAPI({
  image,
  productName,
  productDescription,
  link,
  LinkName,
}) {
  return (
    <div className="container mt-5"  >
      <div className="row">
        <div className="col-4 mt-5" style={{marginLeft:"5%"}}>
          <h4 >{productName}</h4>
          <p className="mt-4">{productDescription}</p>
          <a href="link" >
            {LinkName}
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6"style={{marginLeft:"25px"}}  >
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default KiteconnectAPI;
