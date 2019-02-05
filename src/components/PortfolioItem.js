import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Item = styled.div`
  opacity: 0;
  width: 250px;
  height: 22rem;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-image: url(${props => props.img});
  background-size: cover;
  margin: 1.5rem 0 1.5rem 0;
  cursor: pointer;
  &:hover {
    box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8);
  }
  animation: ${fadein} 1s ease 1s 1 forwards;
`;

const ItemOverlay = styled.div`
  font-family: phosphate;
  color: #fff;
  font-size: 2rem;
  text-align: center;
  padding-top: 45px;
`;

const PortfolioItem = ({ data }) => {
  const { link, image, overlay, name } = data;
  return (
    <>
      {link ? (
        <a style={{ textDecoration: 'none' }} href={link}>
          <Item img={image} key={overlay}>
            <ItemOverlay>{overlay}</ItemOverlay>
          </Item>
        </a>
      ) : (
        <Link style={{ textDecoration: 'none' }} to={`/${name}`}>
          <Item img={image} key={overlay}>
            <ItemOverlay>{overlay}</ItemOverlay>
          </Item>
        </Link>
      )}
    </>
  );
};

export default PortfolioItem;
