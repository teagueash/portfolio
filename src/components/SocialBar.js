import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialBarContainer = styled.div`
  width: 100vw;
  height: 6em;
  margin-bottom: 5em;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const StyledBarAnchor = styled.a`
  color: #393942;
`;

const SocialBarIcon = styled.div`
  margin: 2em;

  & svg:hover {
    cursor: pointer;
    color: #388697;
  }
`;

const SocialBar = props => {
  const { icons } = props;
  return (
    <SocialBarContainer>
      {icons.map(icon => (
        <SocialBarIcon key={icon.name}>
          <StyledBarAnchor href={icon.url}>
            <FontAwesomeIcon icon={icon.fontAwesomeClass} size="3x" />
          </StyledBarAnchor>
        </SocialBarIcon>
      ))}
    </SocialBarContainer>
  );
};

export default SocialBar;
