/*
Tarun Shashank
https://www.stnsaishashank.com
splash screen
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image
} from 'react-native'
export default class Splash extends Component {

    constructor(props) {
        super(props)
        this.state ={ timer: 0}
        setInterval(() => {
            this.setState({ timer: this.state.timer + 1})
        },1000)
    }

    render(){
        return(
            <View style={[styles.container, styles.horizontal]}>
               <Image style={styles.logoContainer} source={require('../assets/img_splash.png')} ></Image>
               <ActivityIndicator size="large" color="#ffffff"/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(46,64,82)',
    },
   // title: {
     //   fontSize: 20,
     //   fontWeight: 'bold',
     //   color : '#ffc857',
   // },
    logoContainer: {
        width: 250,
        height: 250,
    },
    horizontal: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 10
    }
})