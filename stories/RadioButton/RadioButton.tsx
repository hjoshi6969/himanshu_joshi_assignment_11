import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

interface RadioButtonProps {
  label: string;
  disable: boolean;
}

const StyledRadioButton = styled.input<{disable}>`
  cursor: pointer;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')}; 

`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, disable }) => { 
  return (
    <>
        <label>
            <StyledRadioButton
                disabled = {disable} 
                disable = {disable}
                type="radio"
                name="option"
                value="option2"
            />
            {label}
        </label>
    </>
  );
};


export default RadioButton;
