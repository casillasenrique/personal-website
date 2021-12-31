import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import FancyLink from './FancyLink';
import './Navbar.css';

const iconPath = process.env.PUBLIC_URL + '/images/';

const Navbar = () => {
  return (
    <>
      <Controller>
        <Scene duration={600} pin={true} enabled={true}>
          {(progress: number) => (
            <Tween
              to={{
                top: '-1px',
                // bottom: '90vh',
                position: 'fixed',
                width: '100%',
                borderRadius: '0',
                flexDirection: 'row',
              }}
              ease="Power4.easeInOut"
              totalProgress={progress}
              paused
            >
              <nav className="Navbar">
                <Tween
                  to={{
                    opacity: '1',
                    display: 'flex',
                  }}
                  totalProgress={progress}
                  paused
                >
                  <div className="Navbar-top-button">
                    <FancyLink
                      iconSrc={`${iconPath}list.svg`}
                      to="#"
                      label="Top"
                      alt="icon"
                    />
                  </div>
                </Tween>
                <FancyLink
                  iconSrc={`${iconPath}info-circle-fill.svg`}
                  to="#about"
                  label="About"
                  alt="icon"
                />
                <FancyLink
                  iconSrc={`${iconPath}code-slash.svg`}
                  to="#projects"
                  label="Projects"
                  alt="icon"
                />
                <FancyLink
                  iconSrc={`${iconPath}envelope-fill.svg`}
                  to="#socials"
                  label="Socials"
                  alt="icon"
                />
              </nav>
            </Tween>
          )}
        </Scene>
      </Controller>
    </>
  );
};

export default Navbar;
