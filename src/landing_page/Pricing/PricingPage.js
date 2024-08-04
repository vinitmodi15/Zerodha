import React from 'react';
import Hero from "./Hero";
import Brokerage from './Brokerage';
import OpenAccount from '../../OpenAccount';
import BrokerageCalc from './BrokerageCalc';

function PricingPage() {
    return ( 
        <div>
            <Hero/>
            <Brokerage />
            <OpenAccount />
            <BrokerageCalc />
        </div>
     );
}

export default PricingPage;