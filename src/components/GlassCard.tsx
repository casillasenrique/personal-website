import React, { FunctionComponent } from 'react';
import styles from '../styles/GlassCard.module.css';

const GlassCard: FunctionComponent = ({ children }) => {
  return <div className={styles.GlassCard}>{children}</div>;
};

export default GlassCard;
