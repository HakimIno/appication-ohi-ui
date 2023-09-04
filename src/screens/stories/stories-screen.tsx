import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { stories } from "../../shared/mockupdata/data";
import { SnapchatRoutes } from "./components/StoryModal";
import Snapchat from "./components/SnapChat";
import StoryComp from "./components/Story";

export const assets = stories
    .map((story) => [story.avatar, story.source])
    .flat();

const Stack = createSharedElementStackNavigator<SnapchatRoutes>();

const StoriesScreen = () => (
    <Stack.Navigator
        screenOptions={{
            gestureEnabled: false,
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyle: { backgroundColor: "transparent" },
        }}
    >
        <Stack.Screen name="Snapchat" component={Snapchat} />
        <Stack.Screen
            name="Story"
            component={StoryComp}
            sharedElements={(route) => {
                const { id } = route.params.story;
                return [id];
            }}
        />
    </Stack.Navigator>
);

export default StoriesScreen;