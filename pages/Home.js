import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight } from 'react-native';
import LogoW from '../Images/LogoW.PNG';
import { LinearGradient } from 'expo-linear-gradient';



export default function Home() {

 

  return (

    <View style={styles.container}>

      <LinearGradient colors={['#056b60', '#056b60', '#056b60', 'white']} >
        <View style={{flexDirection:'row-reverse', marginRight:5}}>
      <Button title='X' color='transparent' onPress={()=>{alert("search")}}></Button>
      </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 38 }}>
          <Image source={LogoW} style={{ width: 100, height: 100 }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Welcome to</Text>
            <Text style={{ color: 'white', fontSize: 40 }}>SPAZIO</Text>
            <Text style={{ color: 'white', fontSize: 18 }}>Workin' Spaces</Text>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <View style={{ marginLeft: 3 }}>
            <Text style={{ color: 'white' }}>Email adress:</Text>
            <TextInput style={{ height: 20, width: '90%', borderColor: '#fff', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ color: 'white' }}>Password:</Text>
            <TextInput style={{ height: 20, width: '90%', borderColor: '#fff', borderBottomWidth: 1, marginBottom: 10 }} />
          </View>

          <View style={{ flexDirection: 'column', marginHorizontal: 3 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Button title="Register" color='#056b60' ></Button>
              </View>
              <View>
                <Button title="Log In" color='#056b60'></Button>
              </View>
            </View>
            <View style={{ marginTop: 5 }}>
              <Button title="Continue with FaceBook" color='#3b5998'></Button>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',

    alignItems: 'center',



  },
});