import React from 'react';
import { StyledViewContainer, StyledViewDiv, StyledImage, StyledDiv, StyledTextTitle } from '../../assets/styles/swipe_card.styles';
import { Text } from 'react-native';

const SwipeCard1 = (props) => {
    return (
        <StyledViewContainer>
            <StyledImage source={require('./../../assets/images/chien4.jpg')} />
            <StyledViewDiv>
                <StyledDiv>
                    <StyledTextTitle>{props.props.name} , {props.props.age} ans</StyledTextTitle>
                </StyledDiv>
                <StyledDiv>
                    <Text>Sexe : {props.props.gender} </Text>
                    <Text>Race : {props.props.breed}</Text>
                </StyledDiv>
                <StyledDiv>
                    <Text>Taille : {props.props.size} </Text>
                    <Text>Poids : {props.props.weight} kg</Text>
                </StyledDiv>
            </StyledViewDiv>
        </StyledViewContainer>
    );
};

export default SwipeCard1;


