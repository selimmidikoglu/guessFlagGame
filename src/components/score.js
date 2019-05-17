import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default class Score extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Score Page</Text>
            <Button title="Go to Settings Page" onPress = {() => this.props.navigation.navigate('Settings')}></Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
