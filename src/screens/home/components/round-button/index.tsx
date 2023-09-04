import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useRef } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";

interface RoundButtonProps {
    name: any;
    size: number;
    color: string;
    onPress: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({
    name,
    size,
    color,
    onPress
}) => {

    const scale = useRef(new Animated.Value(1)).current;

    const animatedScale = useCallback((newValue: number) => {
        Animated.spring(scale, {
            toValue: newValue,
            friction: 4,
            useNativeDriver: true,
        }).start();
    },
        [scale]
    );

    return (
        <TouchableWithoutFeedback
            onPressIn={() => animatedScale(0.9)}
            delayPressIn={0}
            onPressOut={() => {
                animatedScale(1)
                onPress();
            }}
            delayPressOut={110}

        >
            <Animated.View style={[styles.roundContainer, { transform: [{ scale }] }]}>
                <Ionicons name={name} size={size} color={color} />
            </Animated.View>
        </TouchableWithoutFeedback>
    )
};

export default RoundButton;