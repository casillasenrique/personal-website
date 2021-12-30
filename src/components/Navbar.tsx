import FancyLink from './FancyLink';
import './Navbar.css';

const iconPath = process.env.PUBLIC_URL + '/images/';

const Navbar = () => {
  return (
    <nav className={`navbar ${true && 'fixed'}`}>
      <FancyLink
        iconSrc={`${iconPath}list.svg`}
        to="#"
        label="Top"
        alt="icon"
      />
      <FancyLink
        iconSrc={`${iconPath}info-circle-fill.svg`}
        to="#"
        label="About"
        alt="icon"
      />
      <FancyLink
        iconSrc={`${iconPath}code-slash.svg`}
        to="#"
        label="Projects"
        alt="icon"
      />
      <FancyLink
        iconSrc={`${iconPath}envelope-fill.svg`}
        to="#"
        label="Socials"
        alt="icon"
      />
    </nav>
  );
};

export default Navbar;
