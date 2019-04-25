import React from 'react';
import AboutMe from './AboutMe';
import PortfolioItem from './PortfolioItem';
import SocialBar from './SocialBar';
import styled from 'styled-components';
import coordinatorLogo from '../images/coordinator.jpg';
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
    link: `${path}/lit-review-platform`,
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
    link: `${path}/ufo-sightings-datascience`,
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
    link: `${path}/basic-virtual-scroll`,
  },
  {
    name: 'infinite scroll',
    image: iscrollLogo,
    overlay: 'observer infinite scroll',
    link: `${path}/observer-infinite-scroll`,
  },
  {
    name: 'zookeeper',
    image: zookeeperLogo,
    overlay: 'n-queens',
    link: `${path}/zookeeper`,
  },
  {
    name: 'fruitrage',
    image: fruitrageLogo,
    overlay: 'alpha-beta pruning',
    link: `${path}/FruitRage`,
  },
  {
    name: 'inference engine',
    image: inferenceLogo,
    overlay: 'first-order logic resolution',
    link: `${path}/inferenceEngine`,
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
