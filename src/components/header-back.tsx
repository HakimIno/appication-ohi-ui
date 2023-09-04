import { Pressable, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderBackProps {
    size: number;
    color: string;
    onPress: () => void;
}

export const HeaderBack = (
    props: HeaderBackProps
) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            marginTop: insets.top + 20
        }}>
            <Pressable onPress={props.onPress}>
                <MaterialIcons {...props} name="arrow-back" style={{ marginLeft: 15 }} />
            </Pressable>
        </View>
    )
}