import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { PlusSmall } from 'styled-icons/octicons/PlusSmall';

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ItemContainer = styled.div`
  opacity: 0;
  width: 250px;
  height: 22rem;
  border-radius: 4px;
  background-image: url(${props => props.img});
  background-size: cover;
  cursor: pointer;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  animation: ${fadein} 1s ease-out 1s 1 forwards;

  &:hover {
    box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 480px) {
    height: 70vh;
    width: 90vw;
  }
`;

const ItemHeader = styled.div`
  font-family: phosphate;
  position: absolute
  width: inherit;
  color: #fff;
  font-size: 2em;
  text-align: center;
  padding-top: 45px;
  z-index: -1;

  @media (max-width: 480px) {
    font-family: 'Tajawal', Karla;
    text-transform: uppercase;
    font-size: 2.75em;
  }
`;

const ItemOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  border-radius: inherit;
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.active ? 'visible' : 'hidden')}
  transition: background-color 0.1 ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ItemOverlayAnchor = styled.a`
  cursor: pointer;
  border: none;
  text-decoration: none;
  text-align: center;
  height: 75px;
  width: 105px;
  line-height: 75px;
  margin: 0.5em;
  font-size: 1.25em;
  z-index: 1;
  color: white;
  border-radius: inherit;
  background-color: rgba(0, 0, 0, 0.5);
  transition: visibility 0.1s ease-out, background-color 0.1s ease-out;

  &:hover {
    background-color: rgb(56, 134, 151);
  }
`;

const ItemPlusIcon = styled(PlusSmall)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  top: 5px;
  left: 205px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.1s ease-out;

  &:hover {
    background-color: rgb(56, 134, 151);
  }

  @media (max-width: 480px) {
    left: 292px;
  }
`;

const PortfolioItem = ({ data }) => {
  const { image, overlay } = data;
  const [modal, setModal] = useState(false);
  const onEnter = () => {
    setModal(true);
  };
  const onLeave = () => {
    setModal(false);
  };
  // clicking ItemPlusIcon should trigger modal activation beneath

  return (
    <ItemContainer onMouseEnter={onEnter} onMouseLeave={onLeave} img={image} key={overlay}>
      <ItemHeader>{overlay}</ItemHeader>
      <ItemOverlay active={modal}>
        <ItemPlusIcon onClick={() => alert('WIP!! Will trigger a modal soon')} />
        {data.url && (
          <ItemOverlayAnchor target="_blank" href={data.url}>
            view live
          </ItemOverlayAnchor>
        )}
        {data.gitLink && (
          <ItemOverlayAnchor target="_blank" href={data.gitLink}>
            view repo
          </ItemOverlayAnchor>
        )}
      </ItemOverlay>
    </ItemContainer>
  );
};

export default PortfolioItem;
