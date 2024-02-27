import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

interface LabelProps {
  label: string;
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
  Disable:boolean;
}

const StyledLabel = styled.div<{ backgroundColor: string, fontColor: string, borderColor: string, Disable: boolean}>`
  /* Add your Label styles here */
  background-color: ${(props) => props.backgroundColor}; /* Fixed: backgroundColor was not interpolated */
  color: ${(props) => props.fontColor};
  padding: 10px 13px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  width: 100%;
  border-radius: 4px;
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')}; 
  border: 2px solid ${(props) => props.borderColor};
`;

const Label: React.FC<LabelProps> = ({ label, backgroundColor, fontColor, borderColor, Disable }) => { // Fixed: Added backgroundColor prop
  return (
    <StyledLabel Disable = {Disable} backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor}> {/* Fixed: Passed backgroundColor prop */}
      {label}
    </StyledLabel>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired, 
  backgroundColor: PropTypes.string.isRequired, 
  fontColor: PropTypes.string.isRequired,
};

export default Label;
