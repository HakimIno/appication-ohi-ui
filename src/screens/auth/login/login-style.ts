import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    },
    logoApp: {
        marginBottom: 100,
        width: 200,
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        width: '100%',
        paddingHorizontal: 20
    },
    btnSignin: {
        backgroundColor: '#F5F8FA',
        height: 55,
        width: '100%',
        borderRadius: 40,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#14171A',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68
    },
    btnText: {
        fontSize: 13,
        color:"#14171A",
        fontFamily: 'Kanit_500Medium'
    }
})