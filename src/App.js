import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles/styles';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming with Dani</Text>
      <Pressable
        style={[styles.btn, styles.btnMain]}
        android_ripple={{color: '#fff'}}>
        <Text style={styles.btnText}>Button 1</Text>
      </Pressable>
      <Pressable
        style={[styles.btn, styles.btnDanger]}
        android_ripple={{color: '#fff'}}>
        <Text style={styles.btnText}>Button 2</Text>
      </Pressable>
    </View>
  );
};

export default App;
