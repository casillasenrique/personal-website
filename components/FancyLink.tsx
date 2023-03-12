import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from '../styles/FancyLink.module.css';

type FancyLinkProps = {
  to: string;
  label: string;
  icon: string;
  alt?: string;
  newTab?: boolean;
};

const FancyLink: FunctionComponent<FancyLinkProps> = ({
  to,
  label,
  icon,
  alt,
  newTab,
}) => {
  return (
    <a
      className={styles.container}
      href={to}
      target={newTab ? `_blank` : ''}
      rel="noopener noreferrer"
    >
      <div className={styles.iconContainer}>
        <Image className={styles.icon} src={icon} alt={alt || 'icon'} />
      </div>
      <label className={styles.label}>{label}</label>
    </a>
  );
};

export default FancyLink;
