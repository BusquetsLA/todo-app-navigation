import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/MyStack';
import { global } from './styles/global';

export default function App() {
  return (
    <NavigationContainer style={global.container}>
      <MyStack />
    </NavigationContainer>
  );
};
