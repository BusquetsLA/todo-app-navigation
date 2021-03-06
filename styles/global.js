'use strict';
import { StyleSheet } from 'react-native';
const global = StyleSheet.create({
  container: {
    padding: 30,
  },
  item: { // task styles
    paddingTop: 15,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
    borderStyle: 'dashed',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default global;