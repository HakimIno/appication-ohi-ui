import { View, Text, TextInput, KeyboardAvoidingView, Platform, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './login-phonenumber-styles'
import { HeaderBack } from '../../../components/header-back'
import { RootStackParamList } from '../../../navigation/types'
import { StackNavigationProp } from '@react-navigation/stack'

//ICON
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ModalPopup from '../../../components/modal'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../../shared/constants/theme'
import { useModal } from '../../../hooks/use-modal'


type LoginPhoneNumberScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'LoginPhoneNumber'>;
}

const LoginPhoneNumberScreen = ({ navigation }: LoginPhoneNumberScreenProps) => {
    const modal = useModal();
    const [phoneNumber, setPhoneNumber] = useState('')

    const handlePhoneNumberChange = (text: any) => {
        setPhoneNumber(text)
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <StatusBar style="auto" />
            <HeaderBack onPress={() => navigation.goBack()} size={25} color="#c9c9cc" />

            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    ล็อกอิน
                </Text>
                <Text style={[styles.headerSubText, { marginTop: 10, fontFamily: 'Kanit_300Light', }]}>
                    ล็อกอินหรือลงทะเบียนด้วยเบอร์มือถือ
                </Text>

                <View style={styles.containerInput}>
                    <View style={styles.openDialogView}>
                        <Text style={{ color: "#64748b", fontSize: 11, fontFamily: 'Kanit_400Regular' }}>{"TH +66"}</Text>
                        <MaterialIcons name="arrow-drop-down" size={18} color="#64748b" />
                    </View>
                    <TextInput
                        style={[styles.phoneInputStyle]}
                        keyboardType="numeric"
                        onChangeText={handlePhoneNumberChange}
                        secureTextEntry={false}
                    />
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                }}>
                    <View style={styles.announceContainer}>
                        <Ionicons name="megaphone-outline" size={16} color="#64748b" style={{ marginRight: 8 }} />
                        <Text style={[styles.headerSubText, { fontSize: 11, textAlign: 'left', fontFamily: 'Kanit_300Light', }]}>
                            โปรดตรวจสอบให้แน่ใจว่าได้ป้อน<Text style={{ color: Colors.primary, fontWeight: '600' }}>หมายเลขโทรศัพทร์</Text>มือถือที่คุณกำลังใช้งานอยุ่!
                        </Text>
                    </View>
                    <View style={styles.announceContainer}>
                        <Ionicons name="bonfire-outline" size={16} color="#64748b" style={{ marginRight: 8 }} />
                        <Text style={[styles.headerSubText, { fontSize: 11, textAlign: 'left', fontFamily: 'Kanit_300Light', }]}>
                            เราจะไม่เปิดเผยข้อมุลกับผู้ใช้รายอื่นหมายเลขโทรศัพทร์ของคุณจะไม่ถูกแสดงบนหน้าโปรไฟล์ส่วนตัว
                        </Text>
                    </View>

                    <Pressable style={styles.btnContainer} onPress={modal.onOpen}>
                        <Text style={[styles.headerSubText, { fontSize: 16, color: 'white', fontFamily: 'Kanit_700Bold' }]}>
                            ดำเนินการต่อ
                        </Text>
                    </Pressable>

                    <ModalPopup
                        isOpen={modal.isOpen}
                        close={modal.onClose}
                        textHeader={`กรุณายืนยันหมายเลขโทรศัพท์ของคุณ: +66 ${phoneNumber}`}
                        subText={`เราจำเป็นต้องยืนยันว่า +66 ${phoneNumber} เป็นหมายเลขโทรศัพทร์มือถือของคุณ`}
                        navigation={() => {
                            modal.onClose();
                            navigation.navigate('LoginOTP', {
                                phoneNumber: phoneNumber
                            });
                        }}
                    />
                </View>

            </View>


        </KeyboardAvoidingView>
    )
}

export default LoginPhoneNumberScreen