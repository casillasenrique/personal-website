import React from 'react';
import SubwayLines from '../components/SubwayLines';
import SocialsCard from '../components/SocialsCard';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import { SUBWAY_PATH_COLORS } from '../lib/utils';

import styles from '../styles/FrontPage.module.css';
import Bubble from '../components/Bubble';

const VERSION: string = '3.0.0';

export default function Page() {
  return (
    <div className={styles.FrontPage}>
      <SubwayLines />
      <div className={styles.components}>
        <h1 className={styles.title}>
          Enrique Casillas
          <a
            href="https://github.com/casillasenrique/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            v{VERSION}
          </a>
        </h1>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.sections}>
          <section></section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="projects">
            <h1>Projects</h1>
            <h5 style={{ margin: 0 }}>
              Note: Some links may be broken due to Heroku's changes in 2022.
            </h5>
            <Projects />
          </section>
          <section id="socials">
            <h1>Socials</h1>
            <SocialsCard />
          </section>
        </div>
      </div>
      <div className={styles.bubbles}>
        {Array.from({ length: 13 }, (x, i) => {
          return (
            <Bubble
              key={i}
              color={SUBWAY_PATH_COLORS[i]}
              radius={Math.random() * 200 + 200}
              top={Math.random() * 500}
              left={Math.random() * 100}
            />
          );
        })}
      </div>
    </div>
  );
}
