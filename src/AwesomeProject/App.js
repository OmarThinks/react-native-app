/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */





import React, { Fragment, useState } from 'react';
import { View, Text, Button, TextInput, LogBox, ScrollView, Image } from 'react-native';



var data = "";


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
    <ScrollView>
      <UserName/>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text>{`${data}`}</Text>
    </ScrollView>
  );
}

export default App;
