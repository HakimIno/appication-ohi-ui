import { View, Text, KeyboardAvoidingView, Platform, TextInput, Pressable } from 'react-native'
import React, { FC, useEffect, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { HeaderBack } from '../../../components/header-back'
import { styles } from './login-opt-style'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigation/types'
import { RouteProp } from '@react-navigation/native'
import { Colors } from '../../../shared/constants/theme'

type OtpProps = RouteProp<RootStackParamList, "LoginOTP">;

type LoginOTPScreenProps = {
    route: OtpProps
    navigation: StackNavigationProp<RootStackParamList, 'LoginOTP'>;
}

const LoginOtp: FC<LoginOTPScreenProps> = ({ route, navigation }) => {
    const { phoneNumber } = route.params;

    //state
    const [seconds, setSeconds] = useState(3000);
    const [internalVal, setInternalVal] = useState("");

    const textInputRef = useRef<TextInput>(null);
    const lengthInput = 6;

    const onOtpInputChange = (val: string) => {
        if (val.length === 6) {
            navigation.navigate("Root")
        }
        setInternalVal(val);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(prevSeconds => prevSeconds - 1);
            } else {
                clearInterval(interval);
                if (navigation.isFocused()) {
                    navigation.goBack();
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <StatusBar style="auto" />
            <HeaderBack onPress={() => navigation.goBack()} size={25} color="#c9c9cc" />

            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    ระบุรหัสยืนยัน
                </Text>
                <Text style={[styles.headerSubText, {  }]}>
                    เราส่งรหัสยืนยันไปที่+66 {phoneNumber} โปรดระบุด้างล่าง
                </Text>

                <View >
                    <TextInput
                        ref={textInputRef}
                        onChangeText={onOtpInputChange}
                        value={internalVal}
                        style={styles.textInput}
                        maxLength={lengthInput}
                        keyboardType="number-pad"
                        returnKeyType="done"
                    />

                    <View style={styles.containerInput}>
                        {Array(lengthInput)
                            .fill(null)
                            .map((data, index) => (
                                <Pressable
                                    onPress={() => textInputRef.current?.focus()}
                                    key={index}
                                >
                                    <View style={styles.cellView} key={index}>
                                        <Text style={styles.cellText}>
                                            {internalVal && internalVal.length > 0
                                                ? internalVal[index]
                                                : ""}
                                        </Text>
                                    </View>
                                </Pressable>
                            ))}
                    </View>

                    <Text style={[styles.headerSubText, { marginTop: 30, color: Colors.primary, fontFamily: 'Kanit_400Regular', textAlign: 'center' }]}>
                        หลังจาก{seconds}วินาทีรับรหัสยืนยันใหม่
                    </Text>
                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginOtp