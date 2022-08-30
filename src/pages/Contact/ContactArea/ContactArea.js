import React from 'react';

const ContactArea = () => {
   return (
      <>
         <section className="contact__area">
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-xl-12">
                     <div className="contact__map">
                     <iframe title='contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158893.9562277325!2d-0.14623060800780685!3d51.518388218920464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sjp!4v1658989440899!5m2!1sen!2sjp"></iframe>
                        <div className="contact__wrapper d-md-flex justify-content-between wow fadeInUp" data-wow-delay=".3s">
                           <div className="contact__info mr-100">
                              <h3>Get in touch</h3>
                              <ul>
                                 <li>
                                    <h4>Address</h4>
                                    <p>24 Parking Plaza, Suite 506 <br /> Ardmore, SA 19004</p>
                                 </li>
                                 <li>
                                    <h4>call us</h4>
                                    <p><a href="tel:(404)-888-123-456">(404) 888 123 456</a></p>
                                    <p><a href="tel:(204)-888-234-674">(204) 888 234 674</a></p>
                                 </li>
                                 <li>
                                    <h4>Email Address</h4>
                                    <p><a href="mailto:Info@example.com">Info@example.com</a></p>
                                 </li>
                              </ul>
                           </div>
                           <div className="contact__form">
                              <form >
                                 <input type="text" required placeholder="Your Name" />
                                 <input type="email" required placeholder="Your Email" />
                                 <textarea required placeholder="Your Message"></textarea>
                                 <button type="submit" className="z-btn">Send Message</button>
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