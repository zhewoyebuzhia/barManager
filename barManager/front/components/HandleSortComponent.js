import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HandleSortComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>全部</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>好评</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>中评</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 16,color: 'red',}}>差评</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f1f1f1',
  },
  buttonText: {
    fontSize: 16,
    color: '#333333',
  },
});
export default HandleSortComponent;