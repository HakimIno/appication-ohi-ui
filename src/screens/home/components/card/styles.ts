import { StyleSheet } from "react-native";
import { Colors } from "../../../../shared/constants/theme";
import { CARD } from "../../../../utils/Display";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    card: {
        width: CARD.WIDTH,
        height: CARD.HEIGHT + 30,
        borderRadius: 15,
        position: 'absolute',
        top: 50,
        elevation: 3

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden',

        justifyContent: 'flex-end',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200
    },
    cardInner: {
        position: 'relative',
        paddingBottom: 10
    },
    cardBox: {
        marginHorizontal: 10
    },
    name: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        zIndex: 999,
        position: 'relative'
    },
    distance: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
        zIndex: 999,

    },
    choiceContainer: {
        position: 'absolute',
        top: 40,
        zIndex: 999
    },
    likeChoiceContainer: {
        left: 25
    },
    nopeChoiceContainer: {
        right: 25
    },
    leftButton: {
        position: 'absolute',
        left: 0,
        zIndex: 2,
        height: '80%',
        width: '50%'
    },
    rightButton: {

        position: 'absolute',
        right: 0,
        zIndex: 2,
        height: '80%',
        width: '50%'
    }
});