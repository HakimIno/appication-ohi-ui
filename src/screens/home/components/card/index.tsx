import { StatusBar } from 'expo-status-bar';
import { Animated, ImageBackground, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient';

//ICON
import { Octicons } from '@expo/vector-icons';
import { Colors } from '../../../../shared/constants/theme';
import { Choice } from '../choice';
import Footer from '../footer';
import { ACTION_OFFSET } from '../../../../utils/Display';
import { HERO_ICONS } from '../../../../shared/constants/hero-icon';
import { Pressable } from 'react-native';

interface CardProps {
    name: string;
    image_url: string[];
    isFirst: boolean;
    swipe: any;
    tiltSign: any;
    handleChoice: any;
}

export const Card: React.FC<CardProps> = ({
    name,
    image_url,
    isFirst,
    swipe,
    tiltSign,
    handleChoice,
    ...rest
}) => {

    const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
        inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
        outputRange: ['8deg', '0deg', '-8deg'],
    });

    const likeOpacity = swipe.x.interpolate({
        inputRange: [25, ACTION_OFFSET],
        outputRange: [0, 1],
    })

    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-ACTION_OFFSET, -25],
        outputRange: [1, 0],
    })

    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), { rotate }]
    };

    const renderChoice = () => {
        return (
            <>
                <Animated.View style={[styles.choiceContainer, styles.likeChoiceContainer, { opacity: likeOpacity }]}>
                    <Choice
                        name={HERO_ICONS.heart}
                        type="like"
                        colors={Colors.secondary}
                    />
                </Animated.View>

                <Animated.View style={[styles.choiceContainer, styles.nopeChoiceContainer, { opacity: nopeOpacity }]}>
                    <Choice
                        name={HERO_ICONS.x_mark}
                        type="nope"
                        colors={Colors.gray}
                    />
                </Animated.View>
            </>
        )
    }

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const handleSwipeRight = () => {
        if (currentImageIndex < image_url.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const handleSwipeLeft = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <Animated.View style={[styles.card, isFirst && animatedCardStyle]} {...rest}>
            <Pressable onPress={handleSwipeLeft} style={styles.leftButton}>
            </Pressable>
            <ImageBackground
                source={{
                    uri: image_url[currentImageIndex]
                }}
                style={styles.image}

            >
                <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']} style={styles.gradient} />
                <View style={styles.cardInner}>
                    <View style={styles.cardBox}>
                        <Text style={styles.name}>{name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Octicons name="location" size={20} color="white" style={{ marginRight: 5 }} />
                            <Text style={styles.distance}>ห่างกัน 12 กม.</Text>
                        </View>

                        <Footer handleChoice={handleChoice} />

                    </View>
                </View>

            </ImageBackground>
            <Pressable onPress={handleSwipeRight} style={styles.rightButton}>
                {/* Add a right arrow icon or text here */}
            </Pressable>
            {isFirst && renderChoice()}

        </Animated.View >


    )
}