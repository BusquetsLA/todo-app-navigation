import React from 'react';
import { createStackNavigator }
from '@react-navigation/stack';
import Home from '../screens/Home';
import Task from '../screens/Task';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ // the general styles for the header on both screens
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'white',
        headerTitleStyle: 'bold',
      }}>
      <Stack.Screen
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='Task'
        component={Task}
        options={
          ({ route }) => {({ title: route.params.task })}
        } // so the title of the task will appear at the header
      />
    </Stack.Navigator>
  );
};

export default MyStack;