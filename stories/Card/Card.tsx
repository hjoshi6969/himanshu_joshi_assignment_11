import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

interface CardProps {
  Disable:boolean;
  width:number,
  height:number,
  background:string,
}

const CardLabel = styled.div<{ Disable: boolean; width: number; height: number, background: string }>`
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')};
  width: 15rem;
  height: fit-content;
  filter: ${(props) => (props.Disable ? 'grayscale(100%)' : 'none')}; 
  background-color: ${(props) => props.background};
  border-radius: 9px;
  overflow: hidden;
  color: white;
  font-size: 12px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')};
  img{
    width: inherit;
    
  }
  h1{
    margin: 5px 20px;
  }
  caption{
    margin: 5px 20px 0px;
  }
  p{
    padding: 0px 20px;
  }
  .details {
    display: flex;
    justify-content: space-between;
    padding: 40px 20px 10px;

  }
`;

const Label: React.FC<CardProps> = ({ Disable, width, height, background }) => { // Fixed: Added backgroundColor prop
  return (
    <CardLabel Disable = { Disable } width = { width } height={ height } background= {background}>
        <img src="https://th.bing.com/th/id/OIP.jgrCtH0zb2Q7aYr3S-FUuwAAAA?rs=1&pid=ImgDetMain" alt="" />
        <p>this is a test Project. this is a test Project. this is a test Project. this is a test Project. this is a test Project. this is a test Project.</p>
        <div className='details'>
          <div className='date-made'>02-02-2023</div>
          <div className='skills-used'>HTML, CSS, JS</div>
        </div>
    </CardLabel>
  );
};

export default Label;
