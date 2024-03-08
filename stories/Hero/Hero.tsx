import React from 'react';
import styled from 'styled-components';

interface HeroProps {
  Mobile: boolean;
  link: string;
}

const HeroLabel = styled.img<{ Mobile: boolean }>`
  height:  ${(props) => (!props.Mobile ? '400px' : '600px')};
  width:  ${(props) => (!props.Mobile ? '600px' : '350px')};
`;

const Label: React.FC<HeroProps> = ({ Mobile, link }) => {
  return (
    <>
    <h1 style={{
      color: 'white',
      position: 'relative',
      top: Mobile ? '300px' : '200px',
      left: Mobile ? '0px' :'60px' ,
      padding: '0px 10px',
      fontFamily: 'Gill Sans, "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
      fontSize:  Mobile ? '22px' :'31px' ,
      borderBottom:  Mobile ? 'none' : '3px solid white' ,
      width: 'fit-content'
    }}>Himanahu Joshi-Web Developer</h1>
    <HeroLabel src={link} Mobile={Mobile} />
  </>
  );
};

export default Label;
