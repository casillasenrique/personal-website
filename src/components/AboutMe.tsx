import GlassCard from './GlassCard';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <GlassCard>
      <div className={styles.AboutMe}>
        <h2>About Me</h2>
        <p>
          Hi! My name is Enrique Casillas. I am a 3rd year undergraduate student
          studying computer science and engineering at MIT. I enjoy learning
          about the latest technologies that can be used to help the most amount
          of people possible. I also greatly enjoy data visualization,
          particularly if it relates to urban science.
        </p>
        <p>Check out some of my past projects below!</p>
      </div>
    </GlassCard>
  );
};

export default AboutMe;
