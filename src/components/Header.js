import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring/hooks';
import styled from 'styled-components';

const headerItems = ['Teague', 'Ashcraft'];
const headerConfig = { mass: 5, tension: 2000, friction: 200 };

const TrailsText = styled(animated.div)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 80px;
  height: 80px;
  float: left;
  text-transform: uppercase;
  text-align: center;
  padding: 1%;
`;

const HeaderContainer = styled.div`
  padding: 1.5rem 0 1.5rem 0;
  height: 5rem;
  width: 100%;
  & > div {
    display: flex;
    justify-content: center;
  }
  & ${TrailsText}: nth-child(1) {
    margin-left: 15px;
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
    <HeaderContainer onClick={() => set(state => !state)}>
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
