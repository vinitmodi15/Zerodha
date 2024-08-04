import React from 'react';

function Brokerage() {
    return ( 
        <div className='container border-top border-bottom '>
            <div className='row'>
                <div className='col-4 text-center  mb-5'>
                    <img src='media/images/pricingEquity.svg' alt='pricing equity' style={{width:"70%"}} />
                    <h3>Free equity delivery</h3>
                    <p className='mt-4 mb-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 text-center  mb-5'>
                    <img src='media/images/intradayTrades.svg' alt='intraday trades' style={{width:"70%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p className='mt-4 twxt-muted mb-5'>Flat ₹ 20 or 0.03% (whichever is lower) <br></br> per executed order on intraday trades <br></br> across equity, currency, and commodity <br></br> trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 text-center mb-5 '>
                    <img src='media/images/pricingMF.svg' alt='pricing MF'style={{width:"70%"}} />
                    <h3>Free direct MF</h3>
                    <p className='mt-4 text-muted mb-5'>All direct mutual fund investments are <br></br>absolutely free — ₹ 0 commissions & DP <br></br> charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;