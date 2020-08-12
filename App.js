import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Calculator from './src/components/Calculator';
import Notes from './src/components/Notes';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003366',
  },
};
export default function App() {
  const [mode, setMode] = useState('calculator');
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollCont}>
          <View style={styles.card}>
            {mode === 'calculator' ? <Calculator /> : <Notes />}
          </View>
          <View style={styles.buttonContainer}>
            {mode === 'note' && <Button
              mode="text"
              style={styles.buttonContainer}
              onPress={() => setMode('calculator')}>
              View calculator
          </Button>
            }
            {
              mode === 'calculator' && <Button style={styles.buttonContainer} mode="text" onPress={() => setMode('note')}>
                View my notes
          </Button>}
          </View>
        </ScrollView>

      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  scrollCont: {
    flexDirection: 'column',
    flex: 1,
  },
  container: {
    padding: 20,

  },
  card: {
    alignItems: 'center',
    flex: 1
  },
  buttonContainer: {

  },
  buttonView: {
    width: '50%',
    paddingHorizontal: 5,
  },
});
