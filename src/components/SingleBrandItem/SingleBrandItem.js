import React from 'react';

const SingleBrandItem = ({img}) => { 
   return (
      <>
         <div className="brand__item-wrapper">
            <div className="brand__item">
               <img src={`assets/img/brand/brand-${img}.png`} alt="brand_image"/>
            </div>
         </div>
      </>
   );
};

export default SingleBrandItem;