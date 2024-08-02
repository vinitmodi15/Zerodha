import React from 'react';

function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by traing and investing in:</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Future and Options</p>
                                </li>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Commodity and Derivatives</p> 
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Direct Mutual Funds</p>
                                </li>
                                <li>
                                    <p>Currency Derivatives</p>
                                </li>
                                <li>
                                    <p>Bonds & Government Securities</p> 
                                </li>
                            </ul>
                        </div>
                    </div>
                        <img src='/media/images/pressLogos.png' style={{width:"90%"}} alt='press images'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;