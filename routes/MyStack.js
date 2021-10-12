import React from 'react';
import { createStackNavigator }
from '@react-navigation/stack';
import Home from '../screens/Home';
import Task from '../screens/Task';
import Done from '../screens/Done';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: { // header styles
    backgroundColor: 'red',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const DoneStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name='Done'
        component={Done}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}>
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

export { DoneStack, HomeStack };