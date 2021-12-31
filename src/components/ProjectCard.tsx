import React, { FunctionComponent } from 'react';
import GlassCard from './GlassCard';
import './ProjectCard.css';

type ProjectCardProps = {
  title: string;
  imgPath: string;
  projectUrl: string;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  children,
  title,
  imgPath,
  projectUrl,
}) => {
  return (
    <GlassCard>
      <div className="ProjectCard">
        <h2>{title}</h2>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <img src={imgPath} alt={projectUrl} />
        </a>
        <div className="ProjectCard-description">{children}</div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
