import React, { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import GlassCard from './GlassCard';
import styles from '../styles/ProjectCard.module.css';

type ProjectCardProps = {
  title: string;
  image: StaticImageData;
  projectUrl: string;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  children,
  title,
  image,
  projectUrl,
}) => {
  return (
    <GlassCard>
      <div className={styles.ProjectCard}>
        <h2>{title}</h2>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <Image src={image} alt={projectUrl} loading="eager" />
        </a>
        <div className={styles.description}>{children}</div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
