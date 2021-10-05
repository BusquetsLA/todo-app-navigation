import React from 'react';
import { createStackNavigator }
from '@react-navigation/stack';
import Home from '../screens/Home';
import Task from '../screens/Task';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Task' component={Task} />
    </Stack.Navigator>
  );
};

export default MyStack;