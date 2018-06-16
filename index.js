/*
Tarun Shashank
https://www.stnsaishashank.com
login with splash
*/

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Splash from './component/Splash'
import Login from './component/Login'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = { currentScreen: 'Splash'};
        console.log('Started loading some task')
        setTimeout(()=>{
            console.log('Done some tasks for about 3 seconds')
            this.setState({ currentScreen: 'Login'})
        },3000)
    }
    render(){
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> :<Login />
        return mainScreen
    }
}
AppRegistry.registerComponent('LoginApp', () => Main);
