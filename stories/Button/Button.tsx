import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

interface ButtonProps {
  label: string;
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
  Disable: boolean,
}

const StyledButton = styled.button<{ backgroundColor: string, fontColor: string, borderColor: string, Disable: boolean}>`
  /* Add your button styles here */
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  padding: 8px 16px;
  width: 150px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 20px;
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')}; // Set cursor based on Disable prop
  border: 2px solid ${(props) => props.borderColor};
  text-decoration: ${(props) => (props.Disable ? ' line-through' : 'none')};
`;

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, fontColor, borderColor, Disable }) => { // Fixed: Added backgroundColor prop
  return (
    <StyledButton backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor} Disable={Disable}> {/* Fixed: Passed backgroundColor prop */}
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, 
  backgroundColor: PropTypes.string.isRequired, 
  fontColor: PropTypes.string.isRequired,
};

export default Button;
