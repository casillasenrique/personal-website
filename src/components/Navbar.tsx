import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import FancyLink from './FancyLink';
import './Navbar.css';

const iconPath = process.env.PUBLIC_URL + '/images/';

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
              <nav className="Navbar">
                <FancyLink
                  iconSrc={`${iconPath}info-circle-fill.svg`}
                  to="#about"
                  label="ABOUT"
                  alt="icon"
                />
                <FancyLink
                  iconSrc={`${iconPath}code-slash.svg`}
                  to="#projects"
                  label="PROJECTS"
                  alt="icon"
                />
                <FancyLink
                  iconSrc={`${iconPath}envelope-fill.svg`}
                  to="#socials"
                  label="SOCIALS"
                  alt="icon"
                />
                <Scene
                  triggerElement="#about"
                  classToggle={['.Navbar-top-button', 'active']}
                >
                  <div className="Navbar-top-button">
                    <FancyLink
                      iconSrc={`${iconPath}list.svg`}
                      to="#"
                      label="TOP"
                      alt="icon"
                    />
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
