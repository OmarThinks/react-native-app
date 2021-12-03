/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */





import React, { Fragment, useState } from 'react';
import { View, Text, Button, TextInput, LogBox, ScrollView, Image, FlatList, StyleSheet, TouchableWithoutFeedback } 
from 'react-native';

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
    redBackground:{backgroundColor:"red"},
    mainView:{"padding":"5%", backgroundColor:"lightgrey", height:"100%", justifyContent:"center"}
}
);




const UserName = (props) =>{
  let [text, setText] = [props.messageText, props.setMessageText];

  return (
    <TextInput
      style={{backgroundColor:"black", marginBottom:"5%", color:"white", fontSize:30, padding:10}}
      placeholder='Your Name'
      onChangeText={text=>{setText(text); console.log(text);}}
      defaultValue={text}
    />
  )
}



const HomeScreen = ({ navigation })=>{
  
  const [messageText, setMessageText] = useState("");
  
  return(
    <View style={[styles.mainView]}>

      <UserName messageText ={messageText} setMessageText = {setMessageText}/>


    <TouchableWithoutFeedback>
      <Text style={{ fontSize: 30, backgroundColor:"darkgreen", textAlign:"center", paddingVertical:"3%", color:"white", borderRadius:20 }} onPress={()=>{navigation.navigate('DisplayMessage', { name: messageText })}}
      
      >Say Hello!</Text>
    </TouchableWithoutFeedback>


    </View>
  )
}



const DisplayMessageScreen = ( {navigation , route} )=>{
  return(
      <View style={[styles.mainView]}>
        <Text style={{ fontSize: 50, textAlign:"center",fontWeight:"bold" ,paddingVertical:"3%", color:"darkgreen", }} >{`Hello, ${route.params.name}!`}</Text>
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
            options={{ title: 'Home',
            headerStyle: {
              backgroundColor: 'darkgreen',
              color:"white"
            }, 
            headerTintColor: 'white',
          
          }}
            
        />
        <Stack.Screen
            name="DisplayMessage"
            component={DisplayMessageScreen}
            options={{ title: 'Welcome',
            headerStyle: {
              backgroundColor: 'darkgreen',
              color:"white",
            }, 
            headerTintColor: 'white',
          
          
          
          }}
        />

      </Stack.Navigator>


    </NavigationContainer>

        

  );
}


export default App;
