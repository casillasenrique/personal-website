import React from 'react';
import './SocialsCard.css';
import FancyLink from './FancyLink';
import GlassCard from './GlassCard';

const iconPath = process.env.PUBLIC_URL + '/images/';

const SocialsCard = () => {
  return (
    <GlassCard>
      <div className="SocialsCard">
        <div className="SocialsCard-links">
          <FancyLink
            to="mailto: casillasenrique2019@gmail.com"
            label="casillasenrique2019@gmail.com"
            iconSrc={`${iconPath}envelope-fill.svg`}
            alt="Email: "
            newTab={true}
          />
          <FancyLink
            to="https://github.com/casillasenrique"
            label="casillasenrique"
            iconSrc={`${iconPath}github.svg`}
            alt="GitHub: "
            newTab={true}
          />
          <FancyLink
            to="https://www.linkedin.com/in/enrique-casillas-910018193/"
            label="Enrique Casillas"
            iconSrc={`${iconPath}linkedin.svg`}
            alt="LinkedIn: "
            newTab={true}
          />
          <FancyLink
            to="https://www.facebook.com/enrique.casillas.9003"
            label="Enrique Casillas"
            iconSrc={`${iconPath}facebook.svg`}
            alt="Facebook: "
            newTab={true}
          />
          <FancyLink
            to="https://twitter.com/Enrique_______C"
            label="@Enrique_______C"
            iconSrc={`${iconPath}twitter.svg`}
            alt="Twitter: "
            newTab={true}
          />
          <FancyLink
            to="https://www.instagram.com/enrique_casillas_/"
            label="enrique_casillas_"
            iconSrc={`${iconPath}instagram.svg`}
            alt="Instagram: "
            newTab={true}
          />
          <FancyLink
            to="https://www.youtube.com/channel/UCvmqyMGr2mtnRQ5sAbVnc6A"
            label="Enrique Casillas"
            iconSrc={`${iconPath}youtube.svg`}
            alt="Youtube: "
            newTab={true}
          />
          <FancyLink
            to="https://www.twitch.tv/yoshi654654"
            label="Yoshi654654"
            iconSrc={`${iconPath}twitch.svg`}
            alt="Twitch: "
            newTab={true}
          />
        </div>
      </div>
    </GlassCard>
  );
};

export default SocialsCard;
