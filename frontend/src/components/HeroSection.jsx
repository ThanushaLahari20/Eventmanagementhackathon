import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="https://www.shoutlo.com/uploads/articles/header-img-must-attend-new-year-parties-in-chandiagrh-2025.jpg" alt="restaurant" />
      <div className="item">
        <div>
          <h1>Igniting Events, Amplifying Memories</h1>
          <p>
          <h2>Explore the magic of our EventXperience.
                    A go-to solution for managing amazing events effortlessly.</h2> 
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
