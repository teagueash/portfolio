import React from 'react';
import AboutMe from './AboutMe';
import PortfolioItem from './PortfolioItem';
import SocialBar from './SocialBar';
import styled from 'styled-components';
import coordinatorLogo from '../images/coordinator.jpg';
import emailerLogo from '../images/emailer.jpeg';
import tragedyLogo from '../images/tragedy.jpg';
import expeditionsLogo from '../images/expeditions.png';
import ufoLogo from '../images/ufoviz.jpg';
import vscrollLogo from '../images/virtual-scroll.png';
import iscrollLogo from '../images/infinite-scroll.png';
import zookeeperLogo from '../images/zookeeper.png';
import fruitrageLogo from '../images/fruitrage.png';
import inferenceLogo from '../images/inference.png';

const PortfolioContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  padding: 0rem 3rem 1.5rem 3rem;
  margin: 1.5rem 0 1.5rem 0;

  @media (max-width: 480px) {
    padding: 5rem 3rem 1.5rem 3rem !important;
    grid-gap: 50px;
  }
`;

const path = 'https://github.com/teagueash';

const icons = [
  {
    name: 'github',
    fontAwesomeClass: ['fab', 'github'],
    url: 'https://github.com/teagueash',
  },
  {
    name: 'linkedin',
    fontAwesomeClass: ['fab', 'linkedin'],
    url: 'https://www.linkedin.com/in/teagueash/',
  },
];

const items = [
  {
    name: 'coordinator',
    image: coordinatorLogo,
    overlay: 'coordinator',
    gitLink: `${path}/lit-review-platform`,
  },
  {
    name: 'emailer',
    image: emailerLogo,
    overlay: 'emailer',
    gitLink: `${path}/emailer`,
    url: 'https://emailer-backend.herokuapp.com/',
  },
  {
    name: 'documenting tragedy',
    image: tragedyLogo,
    overlay: 'an american tragedy',
    link: false,
  },
  {
    name: 'UFO data visualizations',
    image: ufoLogo,
    overlay: 'area 51',
    gitLink: `${path}/ufo-sightings-datascience`,
    url: 'https://teagueash.github.io/ufo-sightings-datascience/',
  },
  {
    name: 'expeditions',
    image: expeditionsLogo,
    overlay: 'expeditions in space',
    link: false,
  },
  {
    name: 'virtual scroll',
    image: vscrollLogo,
    overlay: 'basic virtual scroll',
    gitLink: `${path}/basic-virtual-scroll`,
    url: 'https://teagueash.github.io/basic-virtual-scroll/',
  },
  {
    name: 'infinite scroll',
    image: iscrollLogo,
    overlay: 'observer infinite scroll',
    gitLink: `${path}/observer-infinite-scroll`,
    url: 'https://teagueash.github.io/observer-infinite-scroll/',
  },
  {
    name: 'zookeeper',
    image: zookeeperLogo,
    overlay: 'n-queens',
    gitLink: `${path}/zookeeper`,
  },
  {
    name: 'fruitrage',
    image: fruitrageLogo,
    overlay: 'alpha-beta pruning',
    gitLink: `${path}/FruitRage`,
  },
  {
    name: 'inference engine',
    image: inferenceLogo,
    overlay: 'first-order logic resolution',
    gitLink: `${path}/inferenceEngine`,
  },
];

const Portfolio = () => {
  return (
    <>
      <AboutMe />
      <PortfolioContainer>
        {items.map(project => (
          <PortfolioItem key={project.name} data={project} />
        ))}
      </PortfolioContainer>
      <SocialBar icons={icons} />
    </>
  );
};

export default Portfolio;
