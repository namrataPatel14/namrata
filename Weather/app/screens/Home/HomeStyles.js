import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const viewportWidth = Dimensions.get('window').width;
const viewportHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  mainContainer: {
    height: viewportHeight,
    width: viewportWidth,
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  submitButton: {
    backgroundColor: '#000',
    borderRadius: viewportWidth * 0.01,
    height: 50,
    margin: viewportWidth * 0.04,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 50,
    textAlign: 'center',
  },
  textInput: {
    marginHorizontal: viewportWidth * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#000',
    fontSize: 16,
    padding: viewportWidth * 0.04,
    height: 50,
  },
});
