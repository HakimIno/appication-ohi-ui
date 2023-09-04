import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Display from '../../../utils/Display';
import { Colors } from '../../../shared/constants/theme';

interface MessageListProps {
    image_url: number;
    name: string,
    message: string;
}

const MessageList: React.FC<MessageListProps> = ({
    image_url,
    name,
    message
}) => {
    return (
        <TouchableOpacity onPress={() => console.log(name)} style={styles.container}>
            <View style={styles.subContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image source={image_url} style={styles.image} />
                    </View>
                    <View style={styles.messageContainer}>
                        <Text numberOfLines={1} style={styles.name}>{name}</Text>
                        <Text numberOfLines={1} style={styles.message}>{message}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.time}>12.22</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MessageList

const styles = StyleSheet.create({
    container: {
        marginVertical: 7,
        borderRadius: 10
    },
    image: {
        width: Display.setWidth(16),
        height: Display.setWidth(16),
        borderRadius: Display.setWidth(19),
        
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    },
    messageContainer: {
        width: Display.setWidth(50),
        marginHorizontal: Display.setWidth(3)
    },
    name: {
        fontSize: 14,
        fontFamily: 'Kanit_300Light',
        color: "#242424",
    },
    message: {
        fontSize: 13,
        fontFamily: 'Kanit_300Light',
        color: "#999",
        lineHeight: 12 * 1.4
    },
    time: {
        fontSize: 11,
        fontFamily: 'Kanit_400Regular',
        color: "#999",
        marginTop: 5
    }
})