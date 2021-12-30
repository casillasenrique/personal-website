import React from 'react';
import SubwayLines from '../components/SubwayLines';
import SocialsCard from '../components/SocialsCard';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
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
        <Navbar />
        <AboutMe />
        <SocialsCard />
      </div>
    </div>
  );
};

export default FrontPage;
