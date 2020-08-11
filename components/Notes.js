import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Card, TextInput,Button } from 'react-native-paper';

const Notes = () => {
	//   const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<View style={styles.container}>
			<View>
				<Text>Notes</Text>
			</View>
			<Card style={styles.pad}>
				<View style={styles.inpContainer}>
					<TextInput style={styles.midContainer}
						label="Note title"
					/>
					<TextInput style={styles.midContainer}
						label="Note status"
					/>
					<Button mode="contained" >
						Add Note
          			</Button>
				</View>
				{/* <FlatList

				/> */}
			</Card>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 500,
		width: '100%',
	},
	midContainer: {
		width: '100%',
		marginBottom:20,
	},
	pad: {
		padding: 20,
	},
	inpContainer: {
		flexDirection: 'column',
		padding: 10,
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

});

export default Notes;
