import React from "react";
import "./Chicago.css";
import chefA from "../assets/Mario and Adrian A.jpg";
import chefB from "../assets/Mario and Adrian b.jpg";

const Chicago = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of opening a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic
            Italian-American favorites.
          </p>
        </div>

        <div className="about-images">
          <img src={chefA} alt="Mario and Adrian" className="chef-img-1" />
          <img src={chefB} alt="Mario and Adrian" className="chef-img-2" />
        </div>
      </div>
    </section>
  );
};

export default Chicago;
