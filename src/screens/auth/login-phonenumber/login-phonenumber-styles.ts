import { StyleSheet } from "react-native";
import { Colors } from "../../../shared/constants/theme";

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
    },
    containerInput: {
        flexDirection: "row",
        paddingHorizontal: 15,
        borderRadius: 45,
        backgroundColor: "white",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: '#64748b',
        height: 50,
        marginVertical: 50
    },
    openDialogView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    phoneInputStyle: {
        flex: 1,
        marginLeft: 5,
        height: 50,
        color: '#64748b',
        fontFamily: 'Kanit_400Regular'
    },
    announceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        maxWidth: '95%',
        marginBottom: 10,
    },
    btnContainer: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})