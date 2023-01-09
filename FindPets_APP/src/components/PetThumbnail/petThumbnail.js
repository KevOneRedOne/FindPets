import React from 'react';
import styled from 'styled-components';

const PetThumbnail = ({imageSource}) => {
  const imageOption = {
    uri: require(imageSource ? '../assets/images/chien.jpg' : '../assets/images/chat.jpg'),
  };

  return (
    <StyledImage
      source={imageOption}
    />
  );
};

const StyledImage = styled.Image`
    width: 100px;
    height: 100px;
    background-color: red;
`;

export default PetThumbnail;
