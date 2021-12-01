/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */





import React, { Fragment, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';



var data = "";



const UserName = () =>{
  let [text, setText] = useState("");

  return (
    <TextInput
      style={{backgroundColor:"cyan"}}
      placeholder='Username'
      onChange={(something)=>{console.log(something);}}
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
