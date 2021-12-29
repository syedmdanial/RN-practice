import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handleRemoveCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming with Dani</Text>
      <View style={styles.countWrapper}>
        <Text style={styles.count}>Count: {count}</Text>
        <TouchableOpacity
          style={styles.btnMain}
          onPress={() => handleAddCount()}>
          <Text style={styles.btnText}>Add Count</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnDanger}
          onPress={() => handleRemoveCount()}>
          <Text style={styles.btnText}>Remove Count</Text>
        </TouchableOpacity>
      </View>
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
  countWrapper: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    margin: 10,
    color: '#4682B4',
    fontSize: 15,
  },
  btnMain: {
    backgroundColor: '#00BFFF',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  btnDanger: {
    backgroundColor: '#FF0000',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default App;
