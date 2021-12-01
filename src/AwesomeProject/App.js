/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */





import React, { Fragment, useState } from 'react';
import { View, Text, Button, TextInput, LogBox } from 'react-native';



var data = "";



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
    <View>
      <UserName></UserName>
      <Text>{`${data}`}</Text>
    </View>
  );
}

export default App;
