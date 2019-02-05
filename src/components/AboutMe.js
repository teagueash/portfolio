import React from 'react';
import { animated, useSpring } from 'react-spring/hooks';
import styled from 'styled-components';

const AboutContainer = styled(animated.div)`
  text-align: center;
  padding: 1.5rem 6rem 3rem 6rem;
`;

const AboutMe = () => {
  const [props, set] = useSpring(() => ({ opacity: 0 }));
  set({ opacity: 1 });

  return (
    <AboutContainer style={props}>
      I am a los angeles based software engineer and recent graduate of the university of southern
      california. I spend most of my engineering hours working with web technologies such as React,
      Node, and AWS. These are some of my projects.
    </AboutContainer>
  );
};

export default AboutMe;
