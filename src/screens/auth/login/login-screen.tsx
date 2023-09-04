import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './login-style'
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';


//Icon
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../../../navigation/types';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../shared/constants/theme';


type LoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {

    const [type, setType] = useState(1);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#06b6d4', '#06b6d4']}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0 }}
                style={styles.linearGradient}
            />
            <StatusBar style="auto" />
            <View style={styles.logoApp}>
                {/* <Image source={{
                    uri: "https://media.discordapp.net/attachments/757941239495655464/1134029368633606274/va.png?width=468&height=468"
                }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                /> */}

                <Text style={{
                    color: 'white',
                    fontSize: 70,
                    fontFamily: 'Kanit_700Bold'
                    
                }}>ohi</Text>
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btnSignin} onPress={() => navigation.navigate('LoginPhoneNumber')}>
                    <MaterialIcons name="phone-iphone" size={24} color="#14171A" style={{ marginHorizontal: 10 }} />
                    <Text style={styles.btnText}>เข้าสู่ระบบด้วยเบอร์มือถือ</Text>
                </Pressable>
                <View style={styles.btnSignin}>
                    <MaterialIcons name="facebook" size={26} color="#0a81ed" style={{ marginHorizontal: 10 }} />
                    <Text style={styles.btnText}>เข้าสู่ระบบด้วย facebook</Text>
                </View>
            </View>


        </View>
    )
}

export default LoginScreen