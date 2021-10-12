import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import global from '../styles/global';

const Done = () => {
  const tasks = useSelector(state => state.tasks);
  const tasksDone = tasks.filter(item => item.done === true);

  return (
    <View style={global.container}>
      <Text>Tasks done:</Text>
      <FlatList
        data={tasksDone}
        renderItem={({ item }) => (
          <TouchableOpacity style={global.item}>
            <Text>
              {item.task}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Done;
