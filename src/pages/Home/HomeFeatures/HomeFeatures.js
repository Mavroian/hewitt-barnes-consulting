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

                     <HomeSingleFeature icon={<FiBook />} title="Our Mission" description="Our mission is to help improve the standards and efficiency of provision of healthcare in the UK by assisting hospitals in achieving their budgetary targets and improving clinical services."/>
                     <HomeSingleFeature icon={<FaLightbulb />} title="Successful New Product Introductions" description={"Cost saving is the top priority for UK Hospitals, yet implementing new products to achieve this has become extremely challenging. We have a proven model for achieving a win – win outcome. Read our Case Study below…"}/>
                     <HomeSingleFeature icon={<BsHouseDoor />} title="People-Focus" description={"Our deep understanding of the needs and challenges of each stakeholder within UK healthcare providers, means we can facilitate synergy and cooperation between hospital departments to achieve sustainable, long-term improvements and savings."}/>
                     <HomeSingleFeature icon={<IoDocumentTextOutline />} title="UK Market Access" description={"We connect global medical device suppliers with UK Hospitals. Our wide network of clinical and industry advisors enables fast, accurate product feedback and advice on how to position new products for successful clinical adoption."}/>
                     <HomeSingleFeature icon={<FiLock />} title="Operational Knowledge" description={"The UK healthcare system is complex. HBC has a deep understanding of the operational challenges from ordering and stock management, through linking software systems, to supply route requirements."}/>
                     <HomeSingleFeature icon={<FaRibbon />} title="Regulatory Knowledge" description={"EU MDR has major implications for current and potential medical device suppliers in Europe. This in turn has implications for UK Hospitals. We offer advice to Hospitals and industry on how to prepare for the impact of MDR in the UK."} />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;