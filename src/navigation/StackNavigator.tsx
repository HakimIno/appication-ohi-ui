import { CardStyleInterpolators, StackNavigationOptions, createStackNavigator } from "@react-navigation/stack";
import {
    HomeScreen,
    LoginOtp,
    LoginPhoneNumberScreen,
    LoginScreen
} from "../screens";
import { RootStackParamList } from "./types";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                gestureDirection: "horizontal",
                transitionSpec: {
                    open: { animation: "timing", config: { duration: 300 } },
                    close: { animation: "timing", config: { duration: 300 } },
                },
            }}>
            {/* <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="LoginPhoneNumber" component={LoginPhoneNumberScreen} />
            <Stack.Screen name="LoginOTP" component={LoginOtp} /> */}
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={
                    {
                        headerShown: false,
                        useNativeDriver: true,
                        gestureEnabled: false,
                    } as StackNavigationOptions
                } />
        </Stack.Navigator>
    )
}

export default StackNavigator;