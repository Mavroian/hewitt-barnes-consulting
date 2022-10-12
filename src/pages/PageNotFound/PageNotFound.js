import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';

const PageNotFound = () => {
    return (
       <>
          <PageHelmet pageTitle="HBC - 404 Page Not Found" />
          <HomeOneHeader/>
          <CommonPageHeader title="404 Page Not Found" subtitle="404 Page"/>
          <>
         <section className="portfolio__area pt-110 pb-160">
            <div className="container">
              <h2>Sorry we could not find what you are looking for!</h2>
            </div>
         </section>
      </>
          <Footer/>
       </>
    );
 };
 
 export default PageNotFound;