import React from 'react';
import ProjectCard from './ProjectCard';
import marcxScreenshot from '../images/marcx-screenshot.png';
import fritterScreenshot from '../images/fritter-screenshot.png';
import roundTableScreenshot from '../images/round-table-screenshot.png';
import migrationVizScreenshot from '../images/migration-viz-screenshot.png';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <ProjectCard
        image={marcxScreenshot}
        projectUrl="https://marcx.herokuapp.com/"
        title="MarcX"
      >
        <p>
          MarcX is a proof-of-concept bookmark manager that takes bookmarks to
          the next level, treating them like apps on your phone. MarcX is the
          first fully-formed website I worked on, along with 2 other team
          members. The stand-out feature of the app is that it presents your
          bookmarks as applications that you can group together and easily click
          on.
        </p>

        <p>
          This project was developed with a React, Node, Express, and MongoDB
          tech stack.
        </p>
      </ProjectCard>
      <ProjectCard
        title="Round Table"
        image={roundTableScreenshot}
        projectUrl="https://mr-round-table.herokuapp.com/"
      >
        <p>
          Round table serves as a location-based forum for 311-related issues in
          Cambridge. Community members can select locations on the shown map and
          create new issues. Community officials can then provide answers to
          these issues and assign a status to them (resolved or in progress, for
          example). Community members and officials are able to click on markers
          on the map to view more details on each issue.
        </p>
        <p>
          This project was developed in a team with 3 other classmates. We used
          a Vue, Node, Express, and MongoDB tech stack.
        </p>
      </ProjectCard>
      <ProjectCard
        title="Family Separations Visualization"
        image={migrationVizScreenshot}
        projectUrl="https://sophzheng.github.io/11.154-family-separations/"
      >
        <p>
          This project served to visualize family separations under Donald
          Trump's Zero Tolerance Policy in 2018. In 2018, the American
          Immigration Council filed a request for information on child
          separations through the Freedom of Information Act. This website uses
          this data sourced from ICE including demographics, facility locations,
          duration of stay, and reasons for separation for shelters all across
          the country.
        </p>
        <p>
          This is a static website developed for a class in a team of 4. Some of
          the software used to create this website includes Pandas and other
          Python libraries to clean the data, Mapbox for the map visualization,
          and D3 for the primary visualizations.
        </p>
      </ProjectCard>
      <ProjectCard
        title="Fritter"
        image={fritterScreenshot}
        projectUrl="https://enriquec-fritter-visual.herokuapp.com/"
      >
        <p>
          Fritter was developed as part of an ongoing solo assignment during the
          2021 Fall semester. The goal of the project was to teach good web
          design practices, UI heuristics, and full-stack development. This
          project is essentially a Twitter clone.
        </p>
        <p>
          This project used a Vue, Node, Express tech stack. It does not have
          persistence, however, as the assignment was meant to emphasize design
          principles.
        </p>
      </ProjectCard>
    </div>
  );
};

export default Projects;
