import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./types";
import { Colors } from "../shared/constants/theme";
import { HomeScreen, MatchScreen, MessageScreen, StoriesScreen } from "../screens";
import { SvgIcon } from "../components/svg-icon";
import { View } from "react-native";


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    zIndex: 999,
                    backgroundColor: Colors.white,
                    borderTopColor: Colors.gray,
                    height: 55,
                    
                },
            }}
            initialRouteName="Home"
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgIcon
                            size={33}
                            color={focused ? Colors.black : Colors.gray}
                            path="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                            stroke={2}
                        />
                    ),
                }}

               
            />
            <BottomTab.Screen
                name="Match"
                component={StoriesScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgIcon
                            size={30}
                            color={focused ? Colors.black : Colors.gray}
                            path="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                            stroke={1}
                        />
                    ),
                }}
            />

            <BottomTab.Screen
                name="Add"
                component={MessageScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={{
                           
                            borderRadius: 8,
                        
                            paddingHorizontal: 4,
                            borderTopWidth: 2,
                            borderBottomWidth: 2,
                            borderLeftWidth: 5,
                            borderRightWidth: 5,
                            paddingVertical: 3,
                            borderLeftColor: "#84cc16",
                            borderRightColor: "#4f46e5",
                            borderTopColor: "#999",
                            borderBottomColor: "#999"
                        }}>
                            <SvgIcon
                                size={25}
                                color={focused ? Colors.black : Colors.gray}
                                path="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                stroke={1.5}
                            />
                        </View>
                    ),
                }}
            />

            <BottomTab.Screen
                name="Messages"
                component={MessageScreen}
                options={{

                    tabBarIcon: ({ focused }) => (

                        <SvgIcon
                            size={30}
                            color={focused ? Colors.black : Colors.gray}
                            path="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                            stroke={0}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Account"
                component={HomeScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <SvgIcon
                            size={30}
                            color={focused ? Colors.black : Colors.gray}
                            path="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                            stroke={0}
                        />
                    ),
                }}

            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator;