import React from 'react';
import styled from 'styled-components';

const Button = ({ title, onPress, color, backgroundColor }) => {
  return (
    <StyledButton onPress={onPress} color={color} backgroundColor={backgroundColor}>
      <StyledText color={color}>{title}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'rgb(36,113,30)'};
  padding: 10px;
  width: 65%;
  margin: 20px;
  border-radius: 50px;
  border: 1px solid ${props => props.color ? props.color : 'green'};
  align-self: center;
`;

const StyledText = styled.Text`
  font-family: 'Roboto';
  align-self: center;
  color: ${props => props.color ? props.color : 'green'};
  font-size: 17px;
  letter-spacing: 1px;
`;

export default Button;
