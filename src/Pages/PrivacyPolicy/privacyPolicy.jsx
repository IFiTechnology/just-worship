import React from "react";
import "./privacyPolicy.css";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";

const privacyPolicy = () => {
  return (
    <section className="privacy">
      <Navbar />
      <div class="privacy-policy-page container section">
        <h1>Privacy Policy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet
          lorem eu est posuere, sit amet efficitur nunc varius.
        </p>
        <p>
          Proin at eleifend lectus. Nulla dapibus hendrerit mauris sed ultrices.
          Vestibulum imperdiet diam vel libero gravida, vitae convallis metus
          malesuada. In sed aliquet nulla. Vestibulum mollis pulvinar metus id
          semper. Sed at nisi at mi hendrerit pharetra. Duis id venenatis velit.
        </p>
        <p>
          For more information, please read our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default privacyPolicy;
