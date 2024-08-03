import React from 'react';

function LeftSection({image,productName,productDescription,tryDemo,TryDemo,learnMore,LearnMore,googlePlay,appleStore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5' style={{marginLeft:"50px"}}>
                    <img src={image} alt='image'/>
                </div>
                <div className='col-1 '></div>
                <div className='col-4 p-5 mt-5 '>
                    <h4>{productName}</h4>
                    <p style={{marginTop:"2rem"}}>{productDescription}</p>
                    <div>

                    <a href='tryDemo ' style={{textDecoration:"none",fontSize:"1rem"}}>{TryDemo} </a>
                    <a href='learnMore' style={{textDecoration:"none" ,marginLeft:"5rem"}}>{LearnMore} </a>
                    </div>
                    <div className='mt-3'>
                    <a href='googlePlay' ><img src="media/images/googlePlayBadge.svg"/></a>
                    <a href='appleStore' style={{marginLeft:"2rem"}}><img src="media/images/appstoreBadge.svg"/></a>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default LeftSection;