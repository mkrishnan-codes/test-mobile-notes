import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import Calculator from './src/components/Calculator';
import Notes from './src/components/Notes';
export default function App() {
  const [mode, setMode] = useState('calculator');

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {mode === 'note' && <Button
          mode="contained"
          style={styles.buttonContainer}
          onPress={() => setMode('calculator')}>
          View calculator
          </Button>
        }
        {
          mode === 'calculator' && <Button style={styles.buttonContainer} mode="contained" onPress={() => setMode('note')}>
           View my notes
          </Button>}
      </View>
      <View style={styles.card}>
        {mode === 'calculator' ? <Calculator /> : <Notes />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  buttonContainer: {
    width: '100%',
  },
  buttonView: {
    width: '50%',
    paddingHorizontal: 5,
  },
});
