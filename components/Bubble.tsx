import React, { FunctionComponent } from 'react';
import styles from '../styles/Bubble.module.css';

type BubbleProps = {
  radius: string | number;
  color: string;
  top: number;
  left: number;
};

const Bubble: FunctionComponent<BubbleProps> = ({
  radius,
  color,
  top,
  left,
}) => {
  return (
    <div
      className={styles.Bubble}
      style={{
        width: radius,
        height: radius,
        backgroundColor: color,
        top: `${top}%`,
        left: `${left}%`,
      }}
    ></div>
  );
};

export default Bubble;
