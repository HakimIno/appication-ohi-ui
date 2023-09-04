import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Dimensions, StyleProp, ViewStyle, ImageStyle, TextStyle, Text } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

import { useVector, snapPoint } from "react-native-redash";
import { SharedElement } from "react-navigation-shared-element";
import { ResizeMode, Video } from "expo-av";
import { SnapchatRoutes } from "./StoryModal";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";


interface StoryProps {
    navigation: NavigationProp<SnapchatRoutes, "Story">;
    route: RouteProp<SnapchatRoutes, "Story">;
}

const { height } = Dimensions.get("window");
const AnimatedVideo = Animated.createAnimatedComponent(Video);

const Story = ({ route, navigation }: StoryProps) => {

    const translation = useVector();



    return (
        <PanGestureHandler>
            <Animated.View >
                <Text> xxxxxxxxxx </Text>
            </Animated.View>
        </PanGestureHandler>
    );
};

export default Story;