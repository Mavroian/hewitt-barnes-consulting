import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} || HBC Consulting </title>
        <meta name="description" content="HBC - Improving patient outcome using MedTech & Digital Health Integration" />
        <meta property="og:title" content="Hewitt Barnes Consulting"/>
        <meta property="og:site_name" content="www.hewitt-barnes.com" />
        <meta property="og:url" content="https://www.hewitt-barnes.com" />
        <meta property="og:description" content="Our team of advisors and collaborators have worked with clinicians, materials management, procurement and finance in the UK for many years. We are united in our passion for excellence in the provision of beneficial technology to our healthcare partners." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hewitt-barnes-consulting-space.fra1.cdn.digitaloceanspaces.com/logo-og.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
    </>
  );
};

export default PageHelmet;
