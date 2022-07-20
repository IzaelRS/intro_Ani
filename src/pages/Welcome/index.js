import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import *  as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.logo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: 390, height: 170, marginTop: 10, borderRadius: 40, }}

                    resizeMode='stretch'
                //center, container, cover, repeat, stretch // alinhamanto de imagem 
                />
            </View>

            <Animatable.View
                daley={600}
                animation="fadeInUp"
                style={styles.boxIntro}>
                <Text style={styles.textfrase}> Investir em conhecimento sempre rende os melhores juros. </Text>

                <Text style={styles.textlogin}> Faça o login para começar </Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btnText}> Acessar </Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4ec2f7'
    },
    logo: {
        flex: 2,
        backgroundColor: '#4ec2f7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxIntro: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    textfrase: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 10,
        color: '#1f4d62'

    },
    textlogin: {
        color: '#1f4d62',
        textAlign: 'center',
        paddingTop: 30
    },
    btn: {
        position: 'absolute', // deixa o botão flutuante 
        backgroundColor: '#4ec2f7',
        borderRadius: 50,
        paddingVertical: 8,
        height: 45,
        width: '65%',
        alignSelf: 'center',
        bottom: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 20
    }
})
