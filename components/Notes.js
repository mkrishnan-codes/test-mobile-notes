import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

const Notes = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={styles.container}>
      <View>
        <Text>Notes</Text>
      </View>
      <Card style={styles.pad}>
       
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  pad: {
    padding: 20,
  },
  midContainer: {
    width: '30%',
  },

  inpContainer: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Notes;
