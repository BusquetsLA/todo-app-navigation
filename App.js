import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { global } from './styles/global';
import MyDrawer from './routes/MyDrawer';
import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={global.container}>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
};
