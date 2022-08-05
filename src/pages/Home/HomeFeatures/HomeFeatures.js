import React from 'react';
import HomeSingleFeature from '../../../components/HomeSingleFeature/HomeSingleFeature';
import { FiBook, FiLock} from 'react-icons/fi';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';

const HomeFeatures = () => {
   return (
      <>
         <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s">
            <div className="container">
               <div className="features__inner fix">
                  <div className="row g-0 ">

                     <HomeSingleFeature icon={<FiBook />} title="Discovery" description="We can help you explore unmet market needs, innovate with full consideration of commercial goals, and enhance the user experience"/>
                     <HomeSingleFeature icon={<FaLightbulb />} title="Regulatory strategy & gap analysis" description={"Plan for rapid global market access with product classification, regulatory pathway selection, technical documentation, and quality management."}/>
                     <HomeSingleFeature icon={<BsHouseDoor />} title="Clinical research" description={"Assess clinical data requirements for your device and design a clinical strategy that supports your commercialization and product goals."}/>
                     <HomeSingleFeature icon={<IoDocumentTextOutline />} title="Risk management" description={"Leverage design review, quality management, and clinical data to ensure product safety in line with ISO 14971 and ISO 14155."}/>
                     <HomeSingleFeature icon={<FiLock />} title="In-country representation" description={"Employ local regulatory expertise to secure market access, conduct clinical trials, and maintain control of your medical device registrations."}/>
                     <HomeSingleFeature icon={<FaRibbon />} title="Post-market compliance" description={"Maintain your position on market with post-market clinical follow-up (PMCF), root cause analysis, incident reporting, and global vigilance support."} />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;