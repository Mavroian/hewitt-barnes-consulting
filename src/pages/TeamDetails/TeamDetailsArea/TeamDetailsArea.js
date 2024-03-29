import React from "react";
import { BiMap } from "react-icons/bi";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamDetailsArea = ({ member }) => {
  const { name, image, title, description } = member;
  console.log(description);
  const firstParagraph = description[0];
  const hasUrl = /https?:\/\/\S+/.test(description.join(" ")); 

  return (
    <>
      <section className="team__details pt-120 pb-160">
        <div className="container">
          <div className="team__details-inner p-relative white-bg">
            <div className="team__details-shape p-absolute">
              <img src="assets/img/icon/team/shape-1.png" alt="" />
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team__details-img w-img mr-70">
                  <img src={`assets/img/team/team-${image}.jpg`} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team__details-content pt-105">
                  <span>{title}</span>
                  <h3>{name}</h3>
                  <p>{firstParagraph}</p>
                  <div className="team__details-contact mb-45">
                    <ul>
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
                      <li>
                        <div className="icon">
                          <i>
                            {" "}
                            <BiMap />{" "}
                          </i>
                        </div>
                        <div className="text">
                          <span>
                            Hewitt-Barnes Consulting Ltd. <br /> Northgate
                            House, Upper Borough Walls, Bath BA1 1RG, UK
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="team__details-social theme-social">
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/company/hewitt-barnes-consulting-ltd/">
                          <i>
                            <FaLinkedin />
                          </i>
                          <i>
                            <FaLinkedin />
                          </i>
                        </a>
                      </li>
                      {/* <li>
                        <a href="/">
                          <i>
                            <FaTwitter />{" "}
                          </i>
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
                          <i>
                            <FaVimeoV />{" "}
                          </i>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="team__details-info mt-60">
                <h4>Information</h4>
                {description.slice(1, description.length).map((paragraph, index) => {
              if (hasUrl && /https?:\/\/\S+/.test(paragraph)) {
                // If the paragraph contains a URL, render it as an anchor tag
                return (
                  <p key={index}>
                    <a href={paragraph} target="_blank" rel="noopener noreferrer" style={{
                        textDecoration: "underline", // Underline the link
                        color: "#007bff", // Set the link color (blue in this example)
                        fontStyle: "italic", // Italicize the link
                      }}>
                      {paragraph}
                    </a>
                  </p>
                );
              } else {
                // Otherwise, render the paragraph as regular text
                return <p key={index}>{paragraph}</p>;
              }
            })}

                <Link to="/contact" className="z-btn mt-10">
                  Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;
