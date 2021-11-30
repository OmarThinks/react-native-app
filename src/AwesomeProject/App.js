/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */





import React from 'react';
import { View, Text } from 'react-native';





const  HzBar = (props) =>{
  return(
    <View>
      <Text>{`${props.tabText}`}</Text>
    </View>
  )
}




const App = () => {
  return (
    <View>
      <Text>Hello, World!</Text>
      <HzBar tabText={`${"Message 1"}`} />
      <HzBar tabText={`${"Message 2"}`} />
      <HzBar tabText={`${"Message 3"}`} />

    </View>
  );
}

export default App;
