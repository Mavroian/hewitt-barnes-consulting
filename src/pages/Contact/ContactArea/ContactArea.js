import React from "react";

const ContactArea = () => {
  return (
    <>
      <section className="contact__area">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="contact__map">
                <iframe
                  title="contact"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39843.92021445581!2d-2.399549391686328!3d51.38017480310401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487178a6743ee12d%3A0x138b27d0d66d9a09!2sBath%2C%20UK!5e0!3m2!1sen!2sjp!4v1662203258384!5m2!1sen!2sjp"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div
                  className="contact__wrapper d-md-flex justify-content-between wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="contact__info mr-100">
                    <h3>Get in touch</h3>
                    <ul>
                      <li>
                        <h4>Address</h4>

                        <p>
                          {" "}
                          Hewitt-Barnes Consulting Ltd. <br /> Northgate House,
                          Upper Borough Walls, Bath BA1 1RG, UK
                        </p>
                      </li>
                      <li>
                        <h4>call us</h4>
                        <p>
                          <a href="tel: +44 (0)800 861 1229">
                            +44 (0)800 861 1229
                          </a>
                        </p>
                      </li>
                      <li>
                        <h4>Email Address</h4>
                        <a href="mailto:info@hewitt-barnes.com">
                          info@hewitt-barnes.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="contact__form">
                    <form
                      action="https://formsubmit.co/info@hewitt-barnes.com"
                      method="POST"
                    >
                      {/* <!-- Honeypot --> */}
                      <input
                        type="text"
                        name="_honey"
                        style={{ display: "none" }}
                      ></input>

                      {/* <!-- Disable Captcha --> */}
                      <input
                        type="hidden"
                        name="_captcha"
                        value="false"
                      ></input>

                      <input type="hidden" name="_next" value="/thanks"></input>
                      <input
                        type="text"
                        name="Fullname"
                        id="fullname"
                        required
                        placeholder="Your Name"
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Your Email"
                      />
                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Your Message"
                      ></textarea>
                      <button type="submit" className="z-btn">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
