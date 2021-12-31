import React, { FunctionComponent } from 'react';
import './FancyLink.css';

type FancyLinkProps = {
  to: string;
  label: string;
  iconSrc: string;
  alt?: string;
  newTab?: boolean;
};

const FancyLink: FunctionComponent<FancyLinkProps> = ({
  to,
  label,
  iconSrc,
  alt,
  newTab,
}) => {
  return (
    <a
      className="FancyLink"
      href={to}
      target={newTab ? `_blank` : ''}
      rel="noopener noreferrer"
    >
      <img src={iconSrc} alt={alt || 'icon'} />
      <label className="FancyLink-label FancyLink-label-underline">
        {label}
      </label>
    </a>
  );
};

export default FancyLink;
