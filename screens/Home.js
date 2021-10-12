import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import { global } from '../styles/global';

const Home = ({ navigation }) => {
  const tasks = useSelector(state => state.tasks);
  const [text, setText] = useState('');
  const handleChange = (val) => {
    setText(val);
  }

  return (
    <View style={global.container}>
      <TextInput
        style={styles.input}
        placeholder='Add nex task'
        onChangeText={handleChange}
      />
      <Button
        title='Add'
        color='blue'
        onPress={() => addTask(text)}
      />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={global.item}
            onPress={() => navigation.navigate('Task', item)}
          >
            <Text>{item.task}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin:10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

export default Home;
