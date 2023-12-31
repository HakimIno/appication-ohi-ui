import * as React from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import { View, Image, StyleSheet, Dimensions, Pressable, Text } from "react-native";
import { SnapchatRoutes, Story } from "./StoryModal";
import { StackNavigationProp } from "@react-navigation/stack";
import { Colors } from "../../../shared/constants/theme";

const margin = 16;
const borderRadius = 5;
const width = Dimensions.get("window").width / 2 - margin;

const styles = StyleSheet.create({
    container: {
        width,
        height: width * 1.5,
        marginTop: 16,
        borderRadius,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        resizeMode: "cover",
        borderRadius,
    },
});

type StoryScreenNavigationProp = StackNavigationProp<SnapchatRoutes, 'Story'>;

interface StoryThumbnailProps {
    story: Story;
}

const StoryThumbnail = ({ story }: StoryThumbnailProps) => {
    const navigation = useNavigation<StoryScreenNavigationProp>();

    const [opacity, setOpacity] = React.useState(1);
    useFocusEffect(() => {
        if (navigation.isFocused()) {
            setOpacity(1);
        }
    });

    return (
        <Pressable
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            onPress={() => {
                setOpacity(0);
                console.log(story)
                navigation.navigate("Story", { story });
            }}
        >
            <SharedElement id={story.id}>
                <View style={[styles.container, { opacity }]}>
                    <Image source={story.source} style={styles.image} />
                    <Text style={{
                        color: Colors.white
                    }}>{story.user}</Text>
                </View>
            </SharedElement>
        </Pressable>
    );
};

export default StoryThumbnail;