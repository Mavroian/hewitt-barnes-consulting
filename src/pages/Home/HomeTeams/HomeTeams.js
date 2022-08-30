import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';
import { FaPlus } from 'react-icons/fa';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTeams = () => {
   return (
      <>
         <section className="team__area pt-30 pb-110">
            <div className="container">
               <div className="row align-items-center mb-55">
                  <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                     <div className="section__title section__title-3 mb-30">
                        <span>Our Team</span>
                        <h2>Meet our leadership team</h2>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4">
                     <div className="team__more d-flex justify-content-sm-end mb-85">
                        <Link to="/team" className="z-btn z-btn-border">View all<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleTeam image="1" name="Peter Barnes" title="Owner and Managing Consultant" description="Pete has vast clinical and commercial experience in the UK medical devices sector. His understanding of Health Economics including clinical and commercial buying priorities has enabled him to adapt to many different therapy areas and add value to his wide network of NHS and Private Hospital customers. Pete is passionate about improving patient outcomes through the cost effective application of medical technology. He is now applying that broad knowledge and experience to provide a holistic consulting service to facilitate successful, win-win partnerships between healthcare providers and Medtech suppliers. Pete founded HBC in March 2020 with a mission to help hospitals achieve clinical and financial objectives." />
                  <SingleTeam image="2" name="Nicoleta Manole" title="International Consultant" description="Nicoleta is a multi-lingual entrepreneur who has run successful recruitment businesses in Europe, North America and Japan. Also a Japanese speaker, Nicoleta enables HBC to build  relationships with key Medtech suppliers, expanding opportunities for accessing beneficial technology for the UK. Her passion for healthcare, and particularly the NHS, drives her determination to help improve patients’ lives."/>
                  <SingleTeam image="3" name="Mr David Griffiths" title="Medical Advisor"　description="Qualifying in 1987, Mr Griffiths completed his formative training in the Midlands. He has worked as a clinical fellow in reproductive medicine at St James's University Hospital, Leeds and in 1994 was awarded a Fellowship to Harvard Medical School, Boston, USA. Before taking up his NHS Consultant post he also worked at the Center for Endometriosis Care, Atlanta, Georgia and various hospitals in New Zealand.Mr Griffiths was a trainer in advanced laparoscopic surgery for The University of Surrey and has taught many of the present consultants. He is currently the principal trainer for benign gynaecological surgery for the O&G trainees in the South West Deanery. Mr Griffiths has an advisory role with HBC, with a particular focus on performance management for efficiency in surgery." />
                  <SingleTeam image="4" name="Eugene Warren" title="Medtech Consultant" description="Eugene has over 30 years experience in the medical devices industry. Having held management positions in companies such as Smith & Nephew and Zimmer Biomet, Eugene has spent the last 11 years as Managing Director of Accord Medical Ltd. Eugene brings not only expert understanding of the clinical, operational and financial workings of the UK healthcare system, but also a vast network of clinicians, across multiple specialities, to broaden HBC’s access to Key Opinion Leaders" />

                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="team__item team__item-add p-relative text-center fix mb-30" >
                        <div className="team__add">
                           <Link to="/team"><i > <FaPlus/> </i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTeams;