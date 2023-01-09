import React from 'react';
import styled from 'styled-components';

const TextInputCustom = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <TextInputContainer>
            <TextInputStyled
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </TextInputContainer>
    );
};

//--------------Styled Components----------------
const TextInputContainer = styled.View`
  width: 300px;
  margin-top: 20px;
  margin-bottom: 15px;

`;

const TextInputStyled = styled.TextInput`
  padding: 12px;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid #000;
  color: #000;
`;

export default TextInputCustom;
