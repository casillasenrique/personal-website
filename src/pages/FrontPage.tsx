import React from 'react';
import SubwayLines from '../components/SubwayLines';
import SocialsCard from '../components/SocialsCard';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

import './FrontPage.css';
import Bubble from '../components/Bubble';

const colors = [
  '#aa5f33',
  '#cf1e65',
  '#06b69c',
  '#abbb41',
  '#d2a763',
  '#8d7eba',
  '#c8bfb3',
  '#00afef',
  '#1bb267',
  '#0073bc',
  '#faa428',
  '#ef463e',
  '#ed272a',
];

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
      {Array.from({ length: 13 }, (x, i) => {
        return (
          <Bubble
            key={i}
            color={colors[i]}
            radius={Math.random() * 200 + 200}
            top={Math.random() * 500}
            left={Math.random() * 100}
          />
        );
      })}
    </div>
  );
};

export default FrontPage;
