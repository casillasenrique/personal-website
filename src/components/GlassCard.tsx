import React, { FunctionComponent } from 'react';
import './GlassCard.css';

const GlassCard: FunctionComponent = ({ children }) => {
  return <div className="GlassCard">{children}</div>;
};

export default GlassCard;
