import React from 'react';
import FancyLink from './FancyLink';
import GlassCard from './GlassCard';
import styles from '../styles/SocialsCard.module.css';

// Icons
import emailIcon from '../public/images/envelope-fill.svg';
import githubIcon from '../public/images/github.svg';
import linkedInIcon from '../public/images/linkedin.svg';
import facebookIcon from '../public/images/facebook.svg';
import instagramIcon from '../public/images/instagram.svg';
import twitterIcon from '../public/images/twitter.svg';
import youtubeIcon from '../public/images/youtube.svg';
import twitchIcon from '../public/images/twitch.svg';

const SocialsCard = () => {
  return (
    <GlassCard>
      <div className={styles.SocialsCard}>
        <div className={styles.links}>
          <FancyLink
            to="mailto: casillasenrique2019@gmail.com"
            label="casillasenrique2019@gmail.com"
            icon={emailIcon}
            alt="Email: "
            newTab={true}
          />
          <FancyLink
            to="https://github.com/casillasenrique"
            label="casillasenrique"
            icon={githubIcon}
            alt="GitHub: "
            newTab={true}
          />
          <FancyLink
            to="https://www.linkedin.com/in/enrique-casillas-910018193/"
            label="Enrique Casillas"
            icon={linkedInIcon}
            alt="LinkedIn: "
            newTab={true}
          />
          <FancyLink
            to="https://www.facebook.com/enrique.casillas.9003"
            label="Enrique Casillas"
            icon={facebookIcon}
            alt="Facebook: "
            newTab={true}
          />
          <FancyLink
            to="https://twitter.com/Enrique_______C"
            label="@Enrique_______C"
            icon={twitterIcon}
            alt="Twitter: "
            newTab={true}
          />
          <FancyLink
            to="https://www.instagram.com/enrique_casillas_/"
            label="enrique_casillas_"
            icon={instagramIcon}
            alt="Instagram: "
            newTab={true}
          />
          <FancyLink
            to="https://www.youtube.com/channel/UCvmqyMGr2mtnRQ5sAbVnc6A"
            label="Enrique Casillas"
            icon={youtubeIcon}
            alt="Youtube: "
            newTab={true}
          />
          <FancyLink
            to="https://www.twitch.tv/yoshi654654"
            label="Yoshi654654"
            icon={twitchIcon}
            alt="Twitch: "
            newTab={true}
          />
        </div>
      </div>
    </GlassCard>
  );
};

export default SocialsCard;
