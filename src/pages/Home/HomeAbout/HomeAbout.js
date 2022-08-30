import { CgArrowLongRight } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <>
      <section className="about__area pb-200 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pr-0 col-lg-6">
              <div className="about__thumb m-img">
                <img
                  src="https://hewitt-barnes-consulting-space.fra1.cdn.digitaloceanspaces.com/about-1.jpeg"
                  alt=""
                />
                <div className="about__shape">
                  <img src="assets/img/about/red-shape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="about__content">
                <div className="section__title mb-25">
                  <span>Who we are</span>
                  <h2>We are Medical Device Experts</h2>
                </div>
                <p>
                  {" "}
                  Our team of advisors and collaborators have worked with
                  clinicians, materials management, procurement and finance in
                  the UK for many years.
                  <br /> We are united in our passion for excellence in the
                  provision of beneficial technology to our healthcare partners.
                </p>
                <div className="about__list">
                  <ul>
                    <li>
                      <span>
                        <i>
                          {" "}
                          <FaCheck />{" "}
                        </i>
                        Knowledge
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>
                          {" "}
                          <FaCheck />{" "}
                        </i>
                        Passion
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>
                          {" "}
                          <FaCheck />{" "}
                        </i>
                        Understanding
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <Link to="/services" className="z-btn " >What we do<i > <CgArrowLongRight /> </i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
