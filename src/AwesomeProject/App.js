/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */





import React, { Fragment, useState } from 'react';
import { View, Text, Button, TextInput, LogBox, ScrollView, Image, FlatList, StyleSheet } from 'react-native';



var data = "";

const styles = StyleSheet.create(
  {
    container:{padding: "5%"},
    big:{ fontSize: 60},
    small:{fontSize: 20},
    red:{ color:"red" },
    blue:{ color: "blue"}
}
);


const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};


const UserName = () =>{
  let [text, setText] = useState("abcdefg");

  return (
    <TextInput
      style={{backgroundColor:"cyan"}}
      placeholder='Username'
      onChangeText={text=>{setText(text); console.log(text);}}
      defaultValue={text}
    />
  )
}




const App = () => {
  return (
    <Fragment>

      <UserName/>
      

      <View style={[styles.container]}>
      <Text style={[styles.big, styles.red]}>Hi!</Text>
      <Text style={[styles.small, styles.blue]}>Hi!</Text>
      </View>



    </Fragment>
  );
}

export default App;
