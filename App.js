import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

import Calculator from './src/components/Calculator';
import Notes from './src/components/Notes';
export default function App() {
  const [mode, setMode] = useState('calculator');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          {mode === 'calculator' ? <Calculator /> : <Notes />}
        </View>
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
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcccc',
    padding: 8,
  },
  card: {
    backgroundColor: '#ffcffc',

    justifyContent: 'center',
    alignItems: 'center',
    // height: 300,
  },
  buttonContainer: {
    // width: '70%',
    // position: 'absolute',
    // bottom: 20
  },
  buttonView: {
    width: '50%',
    paddingHorizontal: 5,
  },
});
