import React from "react";
import Slider from "react-slick";
import SliderWrapper from "../../../components/SliderWrapper/SliderWrapper";

const HomeTwoTestimonial = () => {
  // slick setting
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    infinite: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  const testimonialData = [
    {
      id: 1,
      name: "Meirion Thomas",
      title: "CEO & Managing Director GenMed Enterprises ",
      testimony:`"HBC have been instrumental in managing a complex
      surgical product introduction for us in a large NHS
      ICS. Pete and the team listened to the customer’s
      objectives and were able to communicate the benefits
      of changing a clinically contentious product range to
      over 60 Consultant Surgeons. Despite the challenge,
      HBC managed relationships in a way that meant all
      stakeholders were happy to work with us, and this
      resulted in a successful implementation. I would
      highly recommend HBC to any hospital or supplier in
      the UK"`
    },
    {
      id: 2,
      name: "Simon Ombler",
      title: "Sales Director Mirai Medical ",
      testimony:`"Hewitt-Barnes Consulting has played a key role in our market access strategy.
      Thanks to their network, technical clinical knowledge, and understanding of market entry considerations, 
      we have been able to get our technology into clinical trials with some of the gobally leading clinicians in their therapy area"
      `
    },
  ];

  return (
    <>
      <section className="testimoinal__area gradient-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial__content pt-165 pb-175">
                <div className="section__title section__title-3 mb-30">
                  <span className="white-color">Testimonials</span>
                  <h2 className="white-color">Featured Client Success Story</h2>
                </div>
              <SliderWrapper>
                <Slider className="testimonial__slider pb-70" {...settings}>
                  {testimonialData.map((testimonial, index) => {
                    return (
                      <div key={index} className="testimonial__item">
                        <p
                          className="white-color"
                          style={{ fontStyle: "italic", fontFamily: "emoji" }}
                        > {testimonial.testimony}
                        </p>
                        <div className="testimonial__content d-flex align-items-center">
                          <div className="quote mr-20">
                            <img
                              src="assets/img/icon/testimonial/quote.png"
                              alt="quote"
                            />
                          </div>
                          <div className="testimonial__info">
                            <h4 className="white-color">{testimonial.name}</h4>
                            <span className="white-color">
                              {testimonial.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
                </SliderWrapper>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="testimonial__thumb m-img text-end pt-120 ">
                <img
                  src="assets/img/testimonial/testimonial-1.png"
                  alt="testimonbial"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTwoTestimonial;
