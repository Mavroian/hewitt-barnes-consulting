import React from 'react';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';
import ServicesDetailsHeader from './ServicesDetailsHeader/ServicesDetailsHeader';

const ServicesDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="HBC - Services Details Page" />

         <HomeOneHeader />
         <ServicesDetailsHeader />
         <ServicesDetailsArea />
         <Footer />
      </>
   );
};

export default ServicesDetails;