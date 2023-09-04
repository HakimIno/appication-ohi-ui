import { Dimensions } from "react-native";


const { width, height } = Dimensions.get('screen');

export const CARD = {
    WIDTH: width * 0.95,
    HEIGHT: height * 0.78,
    BORDER_RADIUS: 20,
    OUT_OF_SCREEN: width * 0.5 * width
}

const setHeight = (h: number) => (height / 100) * h
const setWidth = (w: number) => (width / 100) * w

export default { setHeight, setWidth }


export const ACTION_OFFSET = 100;