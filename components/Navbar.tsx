'use client';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import FancyLink from './FancyLink';
import styles from '../styles/Navbar.module.css';
import aboutMeIcon from '../public/images/info-circle-fill.svg';
import projectsIcon from '../public/images/code-slash.svg';
import socialsIcon from '../public/images/envelope-fill.svg';
import topIcon from '../public/images/list.svg';

const Navbar = () => {
  return (
    <>
      <Controller>
        <Scene duration={500} pin={true} enabled={true}>
          {(progress: number) => (
            <Tween
              to={{
                top: '-1px',
                position: 'fixed',
                width: '100%',
                borderRadius: '0',
                flexDirection: 'row',
                fontSize: '12pt',
                gap: '2em',
              }}
              ease="Power4.easeInOut"
              totalProgress={progress}
              paused
            >
              <nav className={styles.container}>
                <FancyLink
                  icon={aboutMeIcon}
                  to="#about"
                  label="ABOUT"
                  alt="icon"
                />
                <FancyLink
                  icon={projectsIcon}
                  to="#projects"
                  label="PROJECTS"
                  alt="icon"
                />
                <FancyLink
                  icon={socialsIcon}
                  to="#socials"
                  label="SOCIALS"
                  alt="icon"
                />
                <Scene
                  triggerElement="#about"
                  classToggle={[`.${styles.top}`, styles.active]}
                >
                  <div className={styles.top}>
                    <FancyLink icon={topIcon} to="#" label="TOP" alt="icon" />
                  </div>
                </Scene>
              </nav>
            </Tween>
          )}
        </Scene>
      </Controller>
    </>
  );
};

export default Navbar;
