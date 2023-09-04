import { StyleSheet } from "react-native";
import { Colors } from "../../shared/constants/theme";
import Display from "../../utils/Display";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    matchContainer: {
        
    },
    headerContainer: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 14,
        fontFamily: 'Kanit_400Regular',
        color: "#999"
    },
    countContainer: {
        backgroundColor: '#ff0050',
        borderRadius: 20,
        paddingHorizontal: 5,
        textAlign: 'center',
        marginLeft: 5,
        justifyContent: 'center',
        height: 20
    },
    textCount: {
        fontSize: 11,
        fontFamily: 'Kanit_500Medium',
        color: Colors.white,
    },
    messageContainer: {
        paddingHorizontal: 16,
        paddingBottom: Display.setHeight(7)
    }
});