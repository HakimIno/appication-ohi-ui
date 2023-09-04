import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        padding: 20,
        marginHorizontal: 10,
        flex: 1
    },
    headerText: {
        fontSize: 30,
        fontFamily: 'Kanit_700Bold'
    },
    headerSubText: {
        fontSize: 14,
        color: '#64748b',
        fontFamily: 'Kanit_300Light'
    },
    containerInput: {
        flexDirection: "row",
        alignItems: 'center'
    },
    cellView: {
        paddingVertical: 13,
        width: 45,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f3f4f6',
        borderRadius: 7
    },
    cellText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: '600'
    },
    textInput: {
        opacity: 0,
    },
})