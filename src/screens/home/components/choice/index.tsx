import React from "react";
import { Text, View } from "react-native"
import { styles } from "./styles";
import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from "../../../../shared/constants/theme";
import Svg, { Path } from "react-native-svg";

interface ChoiceProps {
    name: string;
    type: string;
    colors: string;
}

export const Choice: React.FC<ChoiceProps> = ({
    name,
    colors,
    type
}) => {
    return (
        <View style={styles.container}>
            <Svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={48}
                height={48}
                color={colors}
                strokeWidth={3}
                stroke={colors}
            >
                <Path
                    fillRule="evenodd"
                    d={name}
                    clipRule="evenodd"
                />
            </Svg>
        </View>
    )
}