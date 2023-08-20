import './AboutMe.css';
import React from "react";
const AboutMe = () => {
  return(
    <section className="profile">
      <article className="profile-about-me">
        <h2>I'm Grover Aliaga</h2>
        <p>
          A Software Developer with more than ten years of experience in Java
          and related technologies.
        </p>
      </article>
      <article>
        <img className="profile-img" src="/photo-profile.jpg" width="400px" alt=""/>
      </article>
    </section>
  );
}
export default AboutMe;
