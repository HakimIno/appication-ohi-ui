import { StyleSheet } from "react-native";
import { Colors } from "../../../../shared/constants/theme";
import Display from "../../../../utils/Display";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        width: Display.setWidth(99),
        height: Display.setHeight(6)
    },
    textLogo: {
        fontSize: 22,
        fontFamily: 'Kanit_700Bold',
        color: Colors.secondary
    }
})