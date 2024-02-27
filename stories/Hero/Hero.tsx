import React from 'react';
import styled from 'styled-components';

interface HeroProps {
  Disable: boolean;
  link: string;
}

const HeroLabel = styled.img<{ Disable: boolean }>`
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')};
  height: 400px;
  width: 600px;
  filter: ${(props) => (props.Disable ? 'grayscale(100%)' : 'none')}; 
`;

const Label: React.FC<HeroProps> = ({ Disable, link }) => {
  return (
    <>
      <h1 style={{ color: 'white',
                   position: 'relative',
                   top: '200px', 
                   left: '60px',
                   padding: '0px 10px',
                   fontFamily: 'Gill Sans, "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif', 
                   fontSize: '31px',
                   borderBottom: '3px solid white',
                   width: 'fit-content' }}>Himanahu Joshi-Web Developer</h1>
      <HeroLabel src={link} Disable={Disable} />
    </>
  );
};

export default Label;
