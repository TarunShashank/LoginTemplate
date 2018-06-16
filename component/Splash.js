/*
Tarun Shashank
https://www.stnsaishashank.com
splash screen
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
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
            <View style={styles.container}>
               <Text style={styles.title}>{`Loading in: ${this.state.timer} `}</Text>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color : '#ffc857',
    }
})