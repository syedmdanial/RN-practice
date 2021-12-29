import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming with Dani</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#D3D3D3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default App;
