import React from 'react';
import { View, Text} from 'react-native';
import { StyledViewContainer, StyledTouchableOpacity, StyledImage } from '../../assets/styles/swipe.styles';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import SwipeCard1 from '../Card/swipe_card1';
import SwipeCard2 from '../Card/swipe_card2';
import SwipeCard3 from '../Card/swipe_card3';
import SwipeCard4 from '../Card/swipe_card4';
import SwipeCard5 from '../Card/swipe_card5';

const Swipe = (animals) => {
    return (
        <View>
            <CardStack
                renderNoMoreCards={() => <Text />}
                disableBottomSwipe={true} loop={true}
                ref={swiper => {this.swiper = swiper;}}
            >
                <Card><SwipeCard1 props={animals.data[0]}/></Card>
                <Card><SwipeCard2 props={animals.data[1]}/></Card>
                <Card><SwipeCard3 props={animals.data[4]}/></Card>
                <Card><SwipeCard4 props={animals.data[2]}/></Card>
                <Card><SwipeCard5 props={animals.data[3]}/></Card>
            </CardStack>
            <StyledViewContainer>
                <View>
                    <StyledTouchableOpacity onPress={ () => { this.swiper.swipeLeft();}}>
                        <StyledImage source={require('./../../assets/images/icons/cross.png')}/>
                    </StyledTouchableOpacity>
                </View>
                <View>
                    <StyledTouchableOpacity onPress={ () => { this.swiper.swipeTop();}}>
                        <StyledImage source={require('./../../assets/images/icons/etoile.png')}/>
                    </StyledTouchableOpacity>
                </View>
                <View>
                    <StyledTouchableOpacity onPress={ () => { this.swiper.swipeRight();}}>
                        <StyledImage source={require('./../../assets/images/icons/heart.png')} />
                    </StyledTouchableOpacity>
                </View>
            </StyledViewContainer>
        </View>
    );
};

export default Swipe;
