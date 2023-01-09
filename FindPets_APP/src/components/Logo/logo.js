import React from 'react';
import styled from 'styled-components';

const Logo = ({ width, height}) => {
    return (
        <StyledLogo
            width={width}
            height={height}
            source={require('../../assets/images/logo/logoBlanc.png')}
        />
    );
};

//--------------Styled Components----------------
const StyledLogo = styled.Image`
    width: ${props => props.width ? props.width : '110px'};
    height: ${props => props.width ? props.width : '110px'};
    margin-bottom: 20px;
`;

export default Logo;
