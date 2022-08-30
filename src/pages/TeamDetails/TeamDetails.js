import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import TeamDetailsArea from './TeamDetailsArea/TeamDetailsArea';
import { useLocation } from "react-router-dom";

const TeamDetails = () => {
   const location = useLocation();
   const defaultMember = {
      name: "Peter Barnes",
      image: "1",
      title: "CEO & founder" ,
      description:"Pete has vast clinical and commercial experience in the UK medical devices sector. His understanding of Health Economics including clinical and commercial buying priorities has enabled him to adapt to many different therapy areas and add value to his wide network of NHS and Private Hospital customers. Pete is passionate about improving patient outcomes through the cost effective application of medical technology. He is now applying that broad knowledge and experience to provide a holistic consulting service to facilitate successful, win-win partnerships between healthcare providers and Medtech suppliers. Pete founded HBC in March 2020 with a mission to help hospitals achieve clinical and financial objectives. "
   }
   const member = location.state? location.state.props:  defaultMember;
   return (
      <>
         <PageHelmet pageTitle="Team Details Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Team Details" subtitle="Team Details" />
         <TeamDetailsArea member={member} />
         <CommonCtaArea/>
         <Footer/>
      </>
   );
};

export default TeamDetails;