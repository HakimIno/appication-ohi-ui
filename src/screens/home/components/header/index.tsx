import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../../../shared/constants/theme";
import { SvgIcon } from "../../../../components/svg-icon";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

interface HeaderProps {
    IconLeft?: {
        path: string,
        color: string,
        size: number,
        stroke: number
    };
    IconRight?: {
        path: string,
        color: string,
        size: number,
        stroke: number
    };

    check: boolean;

}

const Header: React.FC<HeaderProps> = ({
    IconLeft = {
        path: "",
        color: "",
        size: 0,
        stroke: 0,
    },
    IconRight = {
        path: "",
        color: "",
        size: 0,
        stroke: 0,
    },
    check
}) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {
            marginBottom: insets.bottom + 2
        }]}>

            <SvgIcon
                path={IconLeft.path}
                color={IconLeft.color}
                size={IconLeft.size}
                stroke={IconLeft.stroke}
            />
            {check ?
                <Text style={styles.textLogo}>ohi</Text> :
                <Text
                    style={[styles.textLogo, {
                        fontSize: 18,
                        color: "#000",
                        fontFamily: "Kanit_500Medium"
                    }]}
                >ข้อความ</Text>}
            <SvgIcon
                path={IconRight.path}
                color={IconRight.color}
                size={IconRight.size}
                stroke={IconRight.stroke}
            />
        </View>
    )
}

export default Header