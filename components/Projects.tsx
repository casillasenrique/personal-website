import React from 'react';
import ProjectCard from './ProjectCard';
import marcxScreenshot from '../public/images/marcx-screenshot.jpg';
import fritterScreenshot from '../public/images/fritter-screenshot.jpg';
import roundTableScreenshot from '../public/images/round-table-screenshot.jpg';
import migrationVizScreenshot from '../public/images/migration-viz-screenshot.jpg';
import livingHeritageScreenshot from '../public/images/living-heritage-beirut.png';
import vidaMigranteScreenshot from '../public/images/vida-migrante.png';
import fortunaScreenshot from '../public/images/fortuna-screenshot.png';
import spatialEquityScreenshot from '../public/images/spatial-equity.png';
import deathPrescriptionScreenshot from '../public/images/death-prescription-screenshot.png';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <ProjectCard
        image={vidaMigranteScreenshot}
        projectUrl="https://vidamigrante.migration.mit.edu/"
        title="Vida Migrante"
        key="Vida Migrante"
      >
        <p>
          Vida Migrante is a simulation that allows users to step into the shoes
          of Venezualan migrants trying to integrate into Ecuador, facing many
          challenges along the way. The turn-based simulation allows users to
          make coping strategy decisions based on certain events that migrants
          often face, many of which relate to food insecurity.
        </p>
        <p>
          This project was developed as part of MIT's Civic Data Design Lab in
          collaboration with the World Food Programme (WFP) using SvelteKit as
          the primary framework for developent. I helped lead the development
          side of the website by delegating tasks and triaging bugs.
        </p>
      </ProjectCard>
      <ProjectCard
        image={fortunaScreenshot}
        projectUrl="https://fortuna-2022.herokuapp.com/ "
        title="FORTUNA"
        key="Fortuna"
      >
        <p>
          Fortuna is a futuristic online casino interfacing with the Ethereum
          blockchain that allows users to chat and play casino games with
          others, use in-game currency to mint their own custom NFTs, and view
          and trade their NFTs elsewhere. The game features several
          community-building features such as a leaderboard and text chats in
          and out of game.
        </p>
        <p>
          This project was developed as part of a 3-person team for MIT's WebLab
          programming competition, in which we won first place. The tech stack
          included React, MongoDB, Firebase, Express, Node.js, and Solidity for
          the custom tokens and NFTs.
        </p>
      </ProjectCard>
      <ProjectCard
        image={livingHeritageScreenshot}
        projectUrl="https://livingheritage.mit.edu/"
        title="Living Heritage Atlas - Beirut"
        key="Beirut"
      >
        <p>
          In light of the 2020 port explosion in Beirut, Lebanon,{' '}
          <i>Living Heritage Atlas</i> documents and visualizes Beirut's living
          heritage of artisanship by mapping its craftspeople and cataloging its
          crafts through an open-source database, viewable through an
          interactive website. This project celebrates the past and present of
          local artisanship through archival data, interviews and community
          workshops.
        </p>
        <p>
          This project was developed as part of MIT's Civic Data Design Lab
          using Next.js and MongoDB as the primary tech stack, with Python being
          used heavily for data processing and analysis.
        </p>
      </ProjectCard>
      <ProjectCard
        image={spatialEquityScreenshot}
        projectUrl="http://spatialequity.nyc/"
        title="Spatial Equity NYC"
        key="Spatial Equity"
      >
        <p>
          Spatial Equity NYC is an online tool visualizes key data in mobility,
          environment, and health categories in New York City. The tool
          indicates where spatial inequities are most prevalent and allows users
          can compare their neighborhoods and see how community boards and
          council districts rank amongst each other.
        </p>
        <p>
          This project was developed as part of MIT's Leventhal Center for
          Advanced Urbanism in collaboration with Transportation Alternatives. I
          worked specifically with the map, using React, Mapbox, Deck.gl, and
          Nebula.gl for implementing different features.
        </p>
      </ProjectCard>
      <ProjectCard
        image={marcxScreenshot}
        projectUrl="/marcx"
        title="MarcX"
        key="MarcX"
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
        image={deathPrescriptionScreenshot}
        projectUrl="https://play.unity.com/mg/other/build-0-1-0"
        title="Death Prescription"
        key="Death Prescription"
      >
        <p>
          Death Prescription is a 2-player competitive game that features
          asymmetric information as a primary game mechanic. The primary goal is
          either to escape the haunted hospital as the patient, or catch the
          patient as the mad doctor. Users use a novel method of wearing tinted
          glasses so that they can only see their own player.
        </p>
        <p>
          This project was developed using the Unity game engine in a team of 4
          others and involved sourcing and creating the artwork and animations,
          finding music and sound effects, and programming the game logic in C#.
        </p>
      </ProjectCard>
      <ProjectCard
        title="Round Table"
        image={roundTableScreenshot}
        projectUrl="https://mr-round-table.herokuapp.com/"
        key="Round Table"
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
        projectUrl="https://fangkelly.github.io/family-separations/"
        key="Family Separations Visualization"
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
        key="Fritter"
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
