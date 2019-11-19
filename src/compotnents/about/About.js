import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
  return (
    <section className="mt-5">
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <h1>Let's get acquainted</h1>
          <h2>My name is Kirill</h2>
          <p>
            I am an enthusiastic and self-motivated Frontend developer with a strong technical skillset and
            attention to details. Get on well with people at all levels, easily making good working relationships.
            Despite my university diploma I am crazy about coding and strive for professional development.
            Have good knowledge of CSS and HTML, experience with CSS preprocessors. Proficient
            understanding of client-side scripting, JavaScript frameworks and libraries including jQuery, React. I
            am UI/UX Fan. Wish to conquer new heights and improve my frontend knowledge and skills. Ready do
            my best, contribute tech skills and Upper-Intermediate English to become a super-efficient team
            player.
          </p>
          <div className="alert alert-secondary">
            I will be proud to work in Headworks
          </div>
          <h4>Meet me in socials</h4>
          <nav>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.instagram.com/kirill.anisimovv/">Instragram</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/anisimovv">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/kirill-kononenko-97a340102/">Linkedin</a>
              </li>
              <li className="list-inline-item">
                <a href="https://t.me/kirill_anisimovv">Telegram</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  
};

export default About;