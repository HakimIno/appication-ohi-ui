import { StatusBar } from 'expo-status-bar';
import { Card } from './components/card';
import { useCallback, useEffect, useRef, useState } from 'react';
import { pets as petsArray } from "../../shared/mockupdata/data"
import { Animated, PanResponder, View } from 'react-native';
import { styles } from './home-styles';
import Header from './components/header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ACTION_OFFSET, CARD } from '../../utils/Display';
import { Colors } from '../../shared/constants/theme';


const HomeScreen = () => {
    const [pets, setPets] = useState(petsArray)
    const insets = useSafeAreaInsets();

    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (!pets.length) {
            setPets(petsArray)
        }
    }, [pets.length])

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx, dy, y0 }) => {
            swipe.setValue({ x: dx, y: dy });
            tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1)
        },
        onPanResponderRelease: (_, { dx, dy }) => {

            const direction = Math.sign(dx);
            const isActionActive = Math.abs(dx) > ACTION_OFFSET;

            if (isActionActive) {
                Animated.timing(swipe, {
                    duration: 200,
                    toValue: {
                        x: direction * 600,
                        y: dy
                    },
                    useNativeDriver: true,
                }).start(removeTopCard);
            } else {
                Animated.spring(swipe, {
                    toValue: {
                        x: 0,
                        y: 0,
                    },
                    useNativeDriver: true,
                    friction: 5
                }).start();
            }


        }
    });

    const removeTopCard = useCallback(() => {
        setPets((prevState) => prevState.slice(1));
        swipe.setValue({ x: 0, y: 0 });
    }, [swipe])

    const handleChoice = useCallback((direction: number) => {
        Animated.timing(swipe.x, {
            toValue: direction * 600,
            duration: 400,
            useNativeDriver: true
        }).start(removeTopCard);
    }, [removeTopCard, swipe.x])

    return (
        <View style={[styles.container, { marginTop: insets.top }]}>
            <StatusBar style="auto" backgroundColor={Colors.white} />
            <Header
                IconLeft={
                    {
                        path: "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z",
                        color: "#4361ee",
                        size: 30,
                        stroke: 1
                    }
                }
                IconRight={
                    {
                        path: "M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z",
                        color: Colors.gray,
                        size: 30,
                        stroke: 1
                    }
                }
                check={true}
            />

            {pets.map(({ name, image_url }, index) => {
                const isFirst = index === 0;
                const dragHandlers = isFirst ? panResponder.panHandlers : {};
                return (
                    <Card
                        key={name}
                        name={name}
                        image_url={image_url}
                        isFirst={isFirst}
                        swipe={swipe}
                        tiltSign={tiltSign}
                        handleChoice={handleChoice}
                        {...dragHandlers}
                    />
                )
            }).reverse()}
        </View>
    )
}

export default HomeScreen
