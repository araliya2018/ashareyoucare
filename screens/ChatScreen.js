import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


import db from '../config';
import firebase from 'firebase';
export default class UserProfileView extends Component {

  constructor(props){
    super(props);
    this.state={
      userId                    : firebase.auth().currentUser.email,
      userName                  : "",
    
      reason_for_requesting     : "",
      recieverName              : '',
      recieverContact           : '',
      recieverAddress           : '',
      recieverRequestDocId      : '',
      relation:"",
    }
  }




  getProfile=async  () => {
    var em=firebase.auth().currentUser.email;
    
   db.collection('saviours').where('friend_email','==',em).get()
.then(snapshot=>{
 snapshot.forEach(doc=>{
   this.setState({
    recieverName    : doc.data().first_name,
    recieverContact : doc.data().mobil_number,
    recieverAddress : doc.data().address,
    relation:doc.data().relation,
    recieveremail:doc.data().email,


    
   })
 })
});

 
 }

 componentDidMount()
 {
this.getProfile();
 }



  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>{this.state.recieverName} </Text>
                <Text style={styles.userInfo}>{this.state.recieveremail}</Text>
                <Text style={styles.userInfo}>India</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Home</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Settings</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>News</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Shop</Text>
              </View>
            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});
