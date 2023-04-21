import React from "react";
import p from "../../assets/img/p.png";
import m from "../../assets/img/m.png";
import "../../assets/css/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about_Us">
      <div className="about-section">
        <h1>About Us</h1>
        <p>Here is some information about our page</p>
        <p>
          We designed to help manage the collection, storage, and
          distribution of donated blood. The website allows registered
          organizations to access a database of potential donors and manage
          their own blood donation programs. This enables efficient and safe
          donation processes, while giving donors the ability to track their
          donations and manage their accounts. The website also provides
          detailed information on the different types of blood donations, as
          well as the latest news and updates regarding the blood donation
          process.
        </p>
      </div>

      <h2 className="about_heading black_color">Our Team</h2>
      <div className="row black_color">
        <div className="column">
          <div className="card">
            <img src={p} alt="Jane" className="width100" />
            <div className="container">
              <h2>Purna</h2>
              <p className="title">CEO & Founder</p>
              <p>purna@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={m} alt="Mike" className="width100" />
            <div className="container">
              <h2>Madhu</h2>
              <p className="title">Art Director</p>
              <p>madhu@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
