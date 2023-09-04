import { View, Text, Modal, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../shared/constants/theme';

interface ModalProps {
    isOpen: boolean;
    close: () => void;
    textHeader: string;
    subText: string;
    navigation: () => void;
}

const ModalPopup = (
    props: ModalProps
) => {
    return (
        <Modal visible={props.isOpen} transparent={true}>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.6)" barStyle="dark-content" />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}
            >
                <View
                    style={{
                        backgroundColor: 'white',
                        padding: 20,
                        width: '85%',
                        borderRadius: 10
                    }}
                >
                    <View style={{
                        padding: 5
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'Kanit_700Bold'

                        }}>{props.textHeader}</Text>
                        <Text
                            style={{
                                fontSize: 13,
                                fontFamily: 'Kanit_400Regular',
                                color: '#64748b',
                                marginTop: 10,
                                textAlign: 'left'
                            }}
                        >{props.subText}</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 50
                    }}>
                        <View />
                        <View
                            style={{
                                flexDirection: 'row',
                            }}
                        >
                            <Pressable onPress={props.close}>
                                <Text style={{ color: Colors.primary, fontSize: 13, marginHorizontal: 10, fontFamily: 'Kanit_500Medium' }}>ยกเลิก</Text>
                            </Pressable>
                            <Pressable onPress={props.navigation}>
                                <Text style={{ color: Colors.primary, fontSize: 13, marginHorizontal: 10, fontFamily: 'Kanit_500Medium' }}>ตกลง</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default ModalPopup