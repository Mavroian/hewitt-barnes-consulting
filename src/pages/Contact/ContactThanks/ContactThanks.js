import React from "react";
import CommonPageHeader from "../../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../../components/shared/Footer";
import PageHelmet from "../../../components/shared/PageHelmet";
import HomeOneHeader from "../../Home/HomeOneHeader/HomeOneHeader";
import { Link } from "react-router-dom";

const ContactThanks = () => {
  return (
    <>
      <PageHelmet pageTitle="Contact Thank you Page" />

      <HomeOneHeader />
      <CommonPageHeader title="Thank you" subtitle="Contact" />
      <>
        <section className="contact__area">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="contact__map">
                  <div className="brand__shape" style={{ zIndex: 999 }}>
                    <img
                      className="square"
                      src="assets/img/icon/brand/square.png"
                      alt=""
                    />
                    <img
                      className="circle"
                      src="assets/img/icon/brand/circle.png"
                      alt=""
                    />
                    <img
                      className="circle-2"
                      src="assets/img/icon/brand/circle-2.png"
                      alt=""
                    />
                    <img
                      className="triangle"
                      src="assets/img/icon/brand/trianlge.png"
                      alt=""
                    />
                  </div>
                  <div
                    style={{ width: "85%", zIndex: -1 }}
                    className="contact__wrapper d-md-flex justify-content-between wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="contact__info mr-100"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "auto",
                      }}
                    >
                      <h3>Thank you for contacting us!</h3>
                      <h6>We will reach out to you as soon as possible. </h6>
                      <Link
                        to="/"
                        className="z-btn z-btn-white mb-30"
                        style={{ border: "1px solid black", marginTop: "20px" }}
                      >
                        Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer />
    </>
  );
};

export default ContactThanks;
