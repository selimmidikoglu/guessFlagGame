import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Game from './src/components/game';
import { createAppContainer } from "react-navigation";

import { connect } from 'react-redux';

const AppNavigation = createAppContainer(Game);

class App extends Component {
  render() {
    
    return (
      <AppNavigation/>
    );
  }
}
mapStateToProps = (state) => {
  return {
    correctAns : state
  }
}
export default connect(mapStateToProps, null)(App); //No Action so null





