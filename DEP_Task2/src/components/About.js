// src/components/AboutMe.js

import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about">
      <div className="mission">
        <h2>Welcome to Sweet Whisk Adventures</h2>
        <p>Where every recipe tells a story and every whisk brings a touch of magic to your kitchen!</p>
        <p>I'm <span className="profile-name">Minahil Fatima</span>, the passionate baker behind this delightful journey into the world of baking.</p>
      </div>
    

      <div className="profile">
        <h3><span className="profile-name">Minahil Fatima</span></h3>
        <p className="profile-story">I'm Minahil Fatima, a self-taught baker with a love for turning flour, sugar, and butter into works of edible art, and since then, it has been a delightful exploration of flavors, textures, and creativity.</p>
        <p>Through Sweet Whisk Adventures, I hope to inspire you to embark on your own sweet journey and create memories through the joy of baking.</p>
      </div>
    </div>
  );
};

export default About;
