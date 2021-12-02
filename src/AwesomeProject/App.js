/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */





import React, { Fragment, useState } from 'react';
import { View, Text, Button, TextInput, LogBox, ScrollView, Image, FlatList, StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();




const styles = StyleSheet.create(
  {
    container:{padding: "5%"},
    big:{ fontSize: 60},
    small:{fontSize: 20},
    red:{ color:"red" },
    blue:{ color: "blue"},
    redBackground:{backgroundColor:"red"}
}
);




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



const HomeScreen = ({ navigation })=>{
  return(
    <Fragment>

      <UserName/>
      <Button title='Submittttt' color="blue" onPress={()=>{navigation.navigate('DisplayMessage', { name: 'Jane' })}}/>

    </Fragment>
  )
}



const DisplayMessageScreen = ( {navigation , route} )=>{
  return(
      <View>
        <Text>{route.params.name}</Text>
      </View>
  );
}








const App = () => {
  return (
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
        />
        <Stack.Screen
            name="DisplayMessage"
            component={DisplayMessageScreen}
            options={{ title: 'Welcome' }}
        />

      </Stack.Navigator>


    </NavigationContainer>

        

  );
}


export default App;
