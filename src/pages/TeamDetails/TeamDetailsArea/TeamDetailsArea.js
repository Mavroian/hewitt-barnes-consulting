import React from 'react';
import { BiMap } from 'react-icons/bi';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeamDetailsArea = ({member}) => {
  
   const {name, image, title, description} = member;
   const descrParagraps = description.split(".");
   return (
      <>
         <section className="team__details pt-120 pb-160">
            <div className="container">
               <div className="team__details-inner p-relative white-bg">
                  <div className="team__details-shape p-absolute">
                     <img src="assets/img/icon/team/shape-1.png" alt=""/>
                  </div>
                  <div className="row">
                     <div className="col-xl-6 col-lg-6">
                        <div className="team__details-img w-img mr-70">
                           <img src={`assets/img/team/team-${image}.jpg`} alt=""/>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6">
                        <div className="team__details-content pt-105">
                           <span>{title}</span>
                           <h3>{name}</h3>
                           <p>{descrParagraps[0]}.</p>
                           <div className="team__details-contact mb-45">
                              <ul>
                                 <li>
                                    <div className="icon theme-color ">
                                       <i > <FaEnvelope/> </i>
                                    </div>
                                    <div className="text theme-color ">
                                       <span><a href="mailto:info@hb-consulting.com">info@hb-consulting.com</a></span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon theme-color">
                                       <i ><FaPhoneAlt /> </i>
                                    </div>
                                    <div className="text theme-color">
                                       <span><a href="tel:(+642)-394-396-432">(+642) 394 396 432</a></span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon">
                                       <i > <BiMap /> </i>
                                    </div>
                                    <div className="text">
                                       <span>Ave 14th Street, Mirpur 210, <br/> London, UK 3296.</span>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="team__details-social theme-social" >
                              <ul>
                                 <li>
                                    <a href="/">
                                       <i ><FaFacebookF /></i>
                                       <i ><FaFacebookF /></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="/">
                                       <i ><FaTwitter /> </i>
                                       <i ><FaTwitter /> </i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="/">
                                       <i ><FaVimeoV /> </i>
                                       <i ><FaVimeoV /> </i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                     <div className="team__details-info mt-60">
                        <h4 >Information</h4>
                        <p >{descrParagraps.slice(1, -1).join(".")}.</p>

                        <Link to="/contact" className="z-btn mt-10">Appoinment</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default TeamDetailsArea;