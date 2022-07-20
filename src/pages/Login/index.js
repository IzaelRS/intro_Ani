import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';

export default function Login() {
     return (
          <View style={styles.container}>
               <Animatable.View
                    animation="fadeInLeft"
                    daley={600}
                    style={styles.aniText}
               >
                    <Text style={styles.text}> Bem Vindo(a) </Text>
               </Animatable.View>

               <Animatable.View
                    animation="fadeInUp"
                    style={styles.containerForm}
                    darley={700}
               >
                    <Text style={styles.inText}> Email </Text>
                    <TextInput
                         placeholder="Digite o seu Email"
                         style={styles.input}
                    />

                    <Text style={styles.inText}> Senha </Text>
                    <TextInput
                         placeholder="Digite sua Senha"
                         style={styles.input}

                    />

                    <TouchableOpacity style={styles.btn1}>
                         <Text style={styles.btnText1}> Acessar </Text>
                    </TouchableOpacity>


                    <Text style={styles.textC}>
                         Se não possui uma conta, clique em "cadastrar"
                    </Text>

                    <TouchableOpacity style={styles.btn2}>
                         <Text style={styles.btnText2}> Cadastrar </Text>
                    </TouchableOpacity>

               </Animatable.View>


          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#4ec2f7',

     },
     aniText: {
          marginTop: '15%',
          marginBottom: '10%',
          paddingStart: '7%',
     },
     text: {
          color: "#fff",
          fontWeight: 'bold',
          fontSize: 30,

     },
     containerForm: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          paddingStart: '7%',
          paddingEnd: '7%',

     },
     inText: {
          fontSize: 20,
          marginTop: 30,
          fontWeight: 'bold',
     },
     input: {
          borderBottomWidth: 2, // cria um linha abaixo
          height: 40,
          marginTop: 12,
          fontSize: 18,

     },
     btn1: {
          backgroundColor: '#4ec2f7',
          width: '100%',
          marginTop: 15,
          borderRadius: 7,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,


     },
     btn2: {
          backgroundColor: '#b3e0f4',
          width: '100%',
          marginTop: 15,
          borderRadius: 7,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
     },
     btnText1: {
          color: '#fff',
          fontSize: 17,
          fontWeight: 'bold',
     },
     btnText2: {
          color: '#fff',
          fontSize: 17
     },

     textC: {
          alignSelf: 'center',
          padding: 5,

     },


})   