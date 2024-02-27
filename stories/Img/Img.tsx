import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

interface ImgProps {
  Disable:boolean;
  width:number,
  height:number,
}

const ImgLabel = styled.img<{ Disable: boolean, width: number, height: number}>`
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')};
  width: 40rem;
  filter: ${(props) => (props.Disable ? 'grayscale(100%)' : 'none')}; 
`;

const Label: React.FC<ImgProps> = ({ Disable, width, height }) => { // Fixed: Added backgroundColor prop
  return (
    <ImgLabel src = "https://wallpapercave.com/wp/wp7185806.jpg" Disable = { Disable } width = { width } height={ height } ></ImgLabel>
  );
};

export default Label;
