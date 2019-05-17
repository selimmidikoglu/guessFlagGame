import React, {Component} from 'react';
import {StyleSheet,Alert, Button,TouchableOpacity, Text, Image, View} from 'react-native';
import { connect } from 'react-redux';
import { getCorrectAnswer, getRandomFlags, getWrongAnswer} from '../actions/flagActions';


let flags = [];
let index;
class SelectFlag extends Component {
  static navigationOptions = {
    title: "Details",
  };
  
  checkFlag(name){
    if(flags[index].name === name){
      Alert.alert(
        'Correct Answer',
        '',
        [
          {text: '', onPress: () => console.log('Ask me later pressed')},
          {
            text: '',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: true},
      );
      var sayi = this.props.getCorrectAnswer();
      console.log(this.props);
    }
    else
      this.props.getWrongAnswer();
  }
  render() {
    const flagNumber = this.props.states.settingsReducer.flagNumber;

    this.props.getRandomFlags();
    flags= this.props.states.flagReducer.indexes;
    index = Math.floor(Math.random()*flagNumber);
    const correctAns = flags[index];
    const flagViews = flags.map((country) =>
      (<View key={country.name} style={{height:120,width:260,margin:10}}>
          <TouchableOpacity onPress={() => {this.checkFlag(country.name)} }>
            <Image source={country.src} resizeMode="cover" style={{height:120,width:260}}/>
          </TouchableOpacity>
        
      </View>
    ));

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>{flags[index].name}</Text>
            {flagViews}
            <Button style={{marginTop: 20,paddingTop: 20}} title={"Check Your Score"} onPress={() => this.props.navigation.navigate('Score')}></Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff10f' ,
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
mapStateToProps = (state) => {
  return {
    states : state
  }
}
export default connect(mapStateToProps,{getCorrectAnswer,getWrongAnswer,getRandomFlags})(SelectFlag);