import React from 'react';
import styled from 'styled-components';

const Thumbnail = ({ width, height}) => {
    return (
        <StyledAvatar
            width={width}
            height={height}
            source={require('./../../assets/images/Famille.jpg')}
        />
    );
};

//--------------Styled Components----------------
const StyledAvatar = styled.Image`
    width: ${props => props.width ? props.width : '110px'};
    height: ${props => props.width ? props.width : '110px'};
    border-radius: 50px;
    margin-bottom: 20px;
`;

export default Thumbnail;
