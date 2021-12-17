import React from 'react';
import './SocialsCard.css';
import FancyLink from './FancyLink';

const iconPath = process.env.PUBLIC_URL + '/images/';

const SocialsCard = () => {
  return (
    <div className="SocialsCard-container">
      <h2>Socials</h2>
      <div className="links">
        <FancyLink
          to="mailto: casillasenrique2019@gmail.com"
          label="casillasenrique2019@gmail.com"
          iconSrc={`${iconPath}envelope-fill.svg`}
          alt="Email: "
        />
        <FancyLink
          to="https://github.com/casillasenrique"
          label="casillasenrique"
          iconSrc={`${iconPath}github.svg`}
          alt="GitHub: "
        />
        <FancyLink
          to="https://www.linkedin.com/in/enrique-casillas-910018193/"
          label="Enrique Casillas"
          iconSrc={`${iconPath}linkedin.svg`}
          alt="LinkedIn: "
        />
        <FancyLink
          to="https://www.facebook.com/enrique.casillas.9003"
          label="Enrique Casillas"
          iconSrc={`${iconPath}facebook.svg`}
          alt="Facebook: "
        />
        <FancyLink
          to="https://twitter.com/Enrique_______C"
          label="@Enrique_______C"
          iconSrc={`${iconPath}twitter.svg`}
          alt="Twitter: "
        />
        <FancyLink
          to="https://www.instagram.com/enrique_casillas_/"
          label="enrique_casillas_"
          iconSrc={`${iconPath}instagram.svg`}
          alt="Instagram: "
        />
        <FancyLink
          to="https://www.youtube.com/channel/UCvmqyMGr2mtnRQ5sAbVnc6A"
          label="Enrique Casillas"
          iconSrc={`${iconPath}youtube.svg`}
          alt="Youtube: "
        />
        <FancyLink
          to="https://www.twitch.tv/yoshi654654"
          label="Yoshi654654"
          iconSrc={`${iconPath}twitch.svg`}
          alt="Twitch: "
        />
      </div>
    </div>
  );
};

export default SocialsCard;
