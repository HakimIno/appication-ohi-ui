import { View } from "react-native";
import { Colors } from "../../../../shared/constants/theme";
import { styles } from "./styles";
import RoundButton from "../round-button";

interface FooterProps {
    handleChoice: any
}

export default function Footer({ handleChoice }: FooterProps) {
    return (
        <View style={styles.btnContainer}>
            <RoundButton name="ios-close" size={35} color="white" onPress={() => handleChoice(-1)} />
            <RoundButton name="ios-heart-sharp" size={35} color={Colors.primary} onPress={() => handleChoice(1)}/>
        </View>
    )
}