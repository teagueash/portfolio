import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring/hooks';
import styled from 'styled-components';

const headerItems = ['Teague', 'Ashcraft'];
const headerConfig = { mass: 5, tension: 2000, friction: 200 };

const TrailsText = styled(animated.div)`
  font-size: 2rem;
  font-weight: 300;
  line-height: 80px;
  height: 80px;
  float: left;
  text-transform: uppercase;
  text-align: center;
  padding: 1%;
`;

const HeaderContainer = styled.div`
  padding: 1.5rem 0;
  height: 5rem;
  margin: 0 5em;
  & > div {
    display: flex;
    justify-content: center;
  }
  & ${TrailsText}: nth-child(1) {
    margin-left: 15px;
  }

  @media (max-width: 480px) {
    margin: 0 1em;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & ${TrailsText} {
      margin-left: 0px !important;
    }

    & ${TrailsText}: nth-child(2) {
      margin-right: 7px;
    }

    & div {
      width: 100%;
    }
  }
`;

const Header = () => {
  const [toggle, set] = useState(true);
  const trail = useTrail(headerItems.length, {
    headerConfig,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : -20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: -20, height: 0 },
  });

  return (
    <HeaderContainer>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <TrailsText
            key={headerItems[index]}
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
          >
            <animated.div style={{ height }}>{headerItems[index]}</animated.div>
          </TrailsText>
        ))}
      </div>
    </HeaderContainer>
  );
};

export default Header;
