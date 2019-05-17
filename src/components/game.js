import React, {Component} from 'react';
// @SCREENS
import Score from './score';
import SelectFlag from './selectflag';
import Settings from './settings';
import { createStackNavigator } from "react-navigation";


const Game = createStackNavigator({
    SelectFlag: {
        screen: SelectFlag,
        
    },
    Score: {
        screen: Score,
    },
    Settings: {
        screen: Settings
    }
});



export default Game;