import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DoneStack } from './MyStack';
import MyTab from './MyTab';

const MyDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={MyTab}/>
      <Drawer.Screen name='Done' component={DoneStack}/>
    </Drawer.Navigator>
  );
};

export default MyDrawer;