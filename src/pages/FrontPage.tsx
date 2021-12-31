import React from 'react';
import SubwayLines from '../components/SubwayLines';
import SocialsCard from '../components/SocialsCard';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

import './FrontPage.css';

const FrontPage = ({ version }: { version: string }) => {
  return (
    <div className="FrontPage">
      <SubwayLines />
      <div className="FrontPage-components">
        <h1 className="FrontPage-title">
          Enrique Casillas
          <a
            href="https://github.com/casillasenrique/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            v{version}
          </a>
        </h1>
        <div className="FrontPage-navbar-container">
          <Navbar />
        </div>
        <div className="FrontPage-sections">
          <section></section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="projects">
            <h1>Projects</h1>
            <Projects />
          </section>
          <section id="socials">
            <h1>Socials</h1>
            <SocialsCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
