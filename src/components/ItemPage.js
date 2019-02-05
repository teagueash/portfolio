import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ItemText = styled.div`
  opacity: 0;
  margin-top: 25px;
  text-align: center;
  animation: ${fadein} 1s ease 1s 1 forwards;
`;

const ItemPage = () => {
  return (
    <ItemText>
      Unfortunately, this is a private repo. Check back later for screen grabs from the project
    </ItemText>
  );
};

export default ItemPage;
