import GlassCard from './GlassCard';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <GlassCard>
      <div className={styles.AboutMe}>
        <h2>About Me</h2>
        <p>
          Hi! My name is Enrique Casillas. I am graduate student studying
          computer science and engineering at MIT. I am passionate about
          learning about the latest technologies that can be used to help people
          and bring awareness to many important issues. My primary focus is on
          data analysis, visualization, and web development.
        </p>
        <p>Check out some of my past projects below!</p>
      </div>
    </GlassCard>
  );
};

export default AboutMe;
