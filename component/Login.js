/*
Tarun Shashank
https://www.stnsaishashank.com
Login screen
*/

import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, StatusBar, TextInput, KeyboardAvoidingView, Keyboard, TouchableOpacity } from 'react-native'

 export default class Login extends Component {
      render(){
          return (
            <SafeAreaView style={styles.container}>
              <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behaviour='padding' style={styles.container}>
                 <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}> 
                  <View style={styles.logoContainer}>
                      <Text style={styles.title}>Dharamshala Foods </Text>
                      <View style={styles.infoContainer}>
                        <TextInput style={styles.input} 
                          underlineColorAndroid='transparent'
                          placeholder= "Username/Email"
                          placeholderTextColor='rgba(225,225,225,0.8)'
                          keyboardType='email-address'
                          returnKeyType='next'
                          autoCorrect={false}
                          onSubmitEditing={()=> this.refs.txtPwd.focus()} />
                        <TextInput style={styles.input} 
                          underlineColorAndroid='transparent'
                          placeholder= "Password"
                          placeholderTextColor='rgba(225,225,225,0.8)'
                          returnKeyType= 'go'
                          secureTextEntry
                          autoCorrect={false}
                          ref={"txtPwd"} />
                          <TouchableOpacity style={styles.buttonContainer}>
                              <Text style={styles.buttonText}>Sign in</Text>
                          </TouchableOpacity>
                         <View style = {styles.lineStyle}></View>
                      </View> 
                   </View>
                  </TouchableWithoutFeedback>
                </KeyboardAvoidingView> 
            </SafeAreaView>
            )
         }
  }
   const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'rgb(46,64,82)',
        },
        logoContainer: {
          alignItems: 'center',
          paddingVertical: 25,
          flex: 1,
        },
        logo: {
          width: 128,
          height: 56,
        },
        title: {
          fontSize: 30,
          fontWeight: 'bold', 
          marginTop: 85,
          color : '#ffc857',
          opacity: 0.9,
          textAlign: 'center',
        },
        infoContainer: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 475,
         // backgroundColor: 'rgb(255,200,87)',
          padding: 20,
        },
        input: {
          height: 40,
          backgroundColor: 'rgba(225,225,225,0.2)',
          color: '#FFF',
          marginBottom: 20,
          paddingHorizontal: 10,
          borderRadius: 25
        },
        buttonContainer: {
          backgroundColor: '#ffc857',
          paddingVertical: 15,
          borderRadius: 25
        },
        buttonText: {
          textAlign: 'center',
          color : 'rgb(65,34,52)',
          fontWeight: 'bold',
          fontSize: 15,
        },
        registerContainer: {
         paddingVertical: 20,
         textAlign: 'center',
        //  height :500
        },
        lineStyle:{
          borderWidth: 0.5,
          borderColor:'black',
          margin:10,
      }
  })