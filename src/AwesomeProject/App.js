/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */





import React, { Fragment, useState } from 'react';
import { View, Text, Button } from 'react-native';





const  HzBar = (props) =>{
  let [isPressed, setIsPressed] = useState(false);
  
  
  return(
      <Fragment>
        <Text>{`${props.tabText}`}</Text>
        <Button onPress={()=>{setIsPressed(true)}} 
        title={isPressed ? `${"Thank you Bro :)"}` : `${"Click here"}`}/>
      </Fragment>
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
