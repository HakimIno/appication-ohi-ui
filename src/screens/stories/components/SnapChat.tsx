import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import StoryThumbnail from "./StoryThumbnail";
import { stories } from "../../../shared/mockupdata/data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../../shared/constants/theme";



const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        backgroundColor: Colors.white

    },
});

const Snapchat = () => {
    const insets = useSafeAreaInsets()
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
        >
            <View style={[styles.container, { marginTop: insets.top }]}>
                {stories.map((story) => (
                    <StoryThumbnail key={story.id} story={story} />
                ))}
            </View>
        </ScrollView>
    );
};

export default Snapchat;