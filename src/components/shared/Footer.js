import React from "react";
import {
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaVimeoV,
  FaLinkedinIn,
  FaGithub,
  FaGlobeAmericas,
} from "react-icons/fa";
import { BiMap } from "react-icons/bi";
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__area grey-bg pt-100">
          <div className="footer__top pb-45">
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title">
                      <h4>Get In touch</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul
                          style={{
                            fontSize: "30px",
                            display: "flex",
                            justifyContent: "space-around",
                            flexDirection: "row",
                          }}
                        >
                          <li>
                            <a href="/">
                              <i>
                                <FaLinkedinIn />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i>
                                <FaFacebook />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i>
                                <FaTwitter />{" "}
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i>
                                <FaVimeoV />{" "}
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/*
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".4s">
                              <div className="footer__widget-title">
                                 <h4>Resources</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="/">Customers</a></li>
                                       <li><a href="/">Pricing</a></li>
                                       <li><a href="/">News</a></li>
                                       <li><a href="/">Learning Center</a></li>
                                       <li><a href="/">Help desk</a></li>
                                       <li><a href="/">Support</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Use Cases</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="/">UI Design</a></li>
                                       <li><a href="/">Agencies</a></li>
                                       <li><a href="/">Digital Marketing</a></li>
                                       <li><a href="/">SEO for Business</a></li>
                                       <li><a href="/">Enterprise</a></li>
                                       <li><a href="/">Publishers</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div> */}
                <div className="col-xl-3 offset-xl-1 col-lg-3 offset-lg-1 col-md-4 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title">
                      <h4>Get in touch</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <ul>
                          <li>
                            <div className="icon">
                              <i>
                                {" "}
                                <BiMap />{" "}
                              </i>
                            </div>
                            <div className="text">
                              <span>
                                <a href="https://goo.gl/maps/etbEydAbysLjPpym6">
                                  Hewitt-Barnes Consulting Ltd. Northgate House,
                                  Upper Borough Walls, Bath BA1 1RG, UK
                                </a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="icon theme-color ">
                              <i>
                                {" "}
                                <FaEnvelope />{" "}
                              </i>
                            </div>
                            <div className="text theme-color ">
                              <span>
                                <a href="mailto:info@hewitt-barnes.com">
                                  info@hewitt-barnes.com
                                </a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="icon theme-color">
                              <i>
                                <FaPhoneAlt />{" "}
                              </i>
                            </div>
                            <div className="text theme-color">
                              <span>
                                <a href="tel: +44 (0)800 861 1229">
                                  +44 (0)800 861 1229
                                </a>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer__copyright-text">
                    <p>
                      Copyright © 2022 All Rights Reserved. Created with passion
                      by{" "}
                      <a
                        href="https://portfolio.mavroian.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Florin Mavroian
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer__social theme-social f-right">
                    <ul>
                      <li>
                        <a href="/https://www.linkedin.com/in/florin-mavroian-1b76a5236/">
                          <i>
                            <FaLinkedinIn />
                          </i>
                          <i>
                            <FaLinkedinIn />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/mavroian">
                          <i>
                            <FaGithub />
                          </i>
                          <i>
                            <FaGithub />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="https://portfolio.mavroian.com/">
                          <i>
                            <FaGlobeAmericas />
                          </i>
                          <i>
                            <FaGlobeAmericas />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
