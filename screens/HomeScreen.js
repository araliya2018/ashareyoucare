import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { recipes } from '../components/dataArrays';

import DrawerActions from 'react-navigation';

import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import {NativeModules} from 'react-native';
import * as SMS from 'expo-sms';
export default class HomeScreen extends React.Component {


  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
   
    if(item.categoryId===3)
    this.props.navigation.navigate('CardsScreen');
    else if(item.categoryId===2)
    this.props.navigation.navigate('DemoScreen');
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='#FF69B4' backgroundColor='#FF69B4' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
       
      </View>
    </TouchableHighlight>
  );
  
 
  render() {
    return (
      <View style={{ flex:1,
        backgroundColor:'#420642',marginTop:50}}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />


      
      </View>
    );
  }
}
