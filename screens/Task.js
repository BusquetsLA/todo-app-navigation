import React from 'react'
import { View, Text, Button } from 'react-native';
import { global } from './styles/global';

const Task = ({ navigation, route }) => {
  const goToHome = () => {
    navigation.pop(); // it'll take you to the previous page
    // navigation.goBack(); // another way
  };

  return (
    <View style={global.container}>
      <Text>{route.params.task}</Text>
      <Button title='Back to home' onPress={goToHome}/>
    </View>
  );
};

export default Task;
