import React from 'react';

function Hero() {
    return ( 
        // <h1>Hero <i class="fa-solid fa-user"></i></h1>
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' style={{width:"85%",marginLeft:"115px"}} />
                 {/* jab puri row chaiye tb apn col class define nhi krenge kyoki puri row chaiye chaiye isko isliye */}
                 <h1>Invest in everything</h1>
                 <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                 <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto",}}>Sign up now </button>
            </div>
        </div>
     );
}

export default Hero;