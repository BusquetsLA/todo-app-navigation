import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { global } from './styles/global';
import MyDrawer from './routes/MyDrawer';

export default function App() {
  return (
    <NavigationContainer style={global.container}>
      <MyDrawer />
    </NavigationContainer>
  );
};
