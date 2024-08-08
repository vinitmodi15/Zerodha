import React from "react";
 import {holdings } from "../data/data";
const Holdings = () => {
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        

        {holdings.map((stock,index)=>{
          const currVal = stock.price * stock.qty;
          const isProfit = currVal - (stock.avg*stock.qty) >=0.0;
          //in this isProfit is boolean it is just returning that the profit is there or not.
          const profClass = isProfit ? "profit" : "loss";
          //in this we are giving the class
          const dayClass = stock.isLoss ? "loss":"profit";
          
          return(
            <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currVal.toFixed(2)}</td>
            <td className={profClass}>{(currVal - (stock.avg * stock.qty)
            ).toFixed(2)}</td> 
            {/* //in this we are giving the class and just displaying the numbers so thats why we have not make check the condition >=0.0 */}
            <td className={profClass}>{stock.net}</td>
            <td className={dayClass}>{stock.day}</td>
          </tr>  
          );
        })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
