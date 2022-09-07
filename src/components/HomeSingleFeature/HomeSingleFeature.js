import React from 'react';
// import { CgArrowLongRight } from 'react-icons/cg';

import {MdOutlineFlipCameraAndroid } from 'react-icons/md';

const HomeSingleFeature = ({icon,title, description}) => {
   return (
      <>
         <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div className="card text-center">
            <div className="features__thumb" style={{ background:`url(assets/img/features/features-1.jpg)`,backgroundRepeat:'no-repeat',width:'100%',backgroundPosition:'center',backgroundSize:'cover'}}></div>
               <div className="card__side card__side--front">
                  <div className="features__content">
                     <div className="features__icon">
                        <i> {icon} </i>
                     </div>
                     <h3> {title} </h3>
                  </div>
                  <div className='feature__container'>
                        <i className='feature__icon spin'>{<MdOutlineFlipCameraAndroid/>}</i>
                  </div>
               </div>
               <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                     <div className="card__price-box">
                        {description}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleFeature;