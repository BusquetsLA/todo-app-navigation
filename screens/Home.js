import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, doneTask } from '../redux/taskActions';
import global from '../styles/global';

const Home = ({ navigation }) => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleChange = (val) => {
    setText(val);
  }
  const handleSubmit = (text) => {
    if (text) {
      dispatch(addTask(text));
      setText('');
    }
  };
  const removeTask = (id) => dispatch(deleteTask(id));
  const finishTask = (id) => dispatch(doneTask(id));

  return (
    <View style={global.container}>
      <TextInput
        style={styles.input}
        placeholder='Add new task'
        onChangeText={handleChange}
      />
      <Button
        title='Add'
        color='blue'
        onPress={() => handleSubmit(text)}
      />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={global.item}
            onPress={() => navigation.navigate('Task', item)}
          >
            <Text
              style={item.done ? null : {fontWeight: 'bold'}}
              onPress={() => finishTask(item.id)}
            >
              {item.task}
            </Text>
            <Button
              title='Delete'
              onPress={() => removeTask(item.id)}
            />
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
  }
});

export default Home;
