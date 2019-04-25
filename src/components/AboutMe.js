import React from 'react';
import { animated, useSpring } from 'react-spring/hooks';
import styled from 'styled-components';

const AboutContainer = styled(animated.div)`
  text-align: center;
  padding: 2em 3em 3em 3em;
  margin: 0 1em;

  @media (max-width: 480px) {
    font-size: 1.25em;
    line-height: 3;
    margin: 0 0.8em;
    padding: 3em 0;
    border-top: 1px solid #bcbcbc;
    border-bottom: 1px solid #bcbcbc;
  }
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
