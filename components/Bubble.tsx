'use client';
import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from '../styles/Bubble.module.css';

type BubbleProps = {
  color: string;
};

const Bubble: FunctionComponent<BubbleProps> = ({ color }) => {
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    setRadius(Math.random() * 200 + 200);
  }, []);

  return (
    <div
      className={styles.Bubble}
      style={{
        width: radius,
        height: radius,
        backgroundColor: color,
        top: `${Math.random() * 500}%`,
        left: `${Math.random() * 100}%`,
      }}
    ></div>
  );
};

export default Bubble;
