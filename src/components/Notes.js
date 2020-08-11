import React, { useReducer } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Card, TextInput, Button, DataTable } from 'react-native-paper';
import { formReducer } from '../reducers/form-reducer';
import { NotesReducer, initialState } from '../reducers/notes-reducer';
const Note = (props) => {
	return (
		<DataTable.Row>
			<DataTable.Cell>{props.title}</DataTable.Cell>
			<DataTable.Cell>{props.status}</DataTable.Cell>
		</DataTable.Row>
	)
}
const Notes = () => {
	const [form, dispatchForm] = useReducer(formReducer, { title: '', status: '' });
	const [notes, dispatchNotes] = useReducer(NotesReducer, initialState);
	const add = () => {
		dispatchNotes({ type: form.status, payload: form })
		dispatchForm({ type: 'reset' });
	}
	return (
		<View style={styles.container}>
			<View style={styles.inpContainer}>
				<Text>Notes</Text>
			</View>
			<Card style={styles.pad}>
				<View style={[styles.addNote]}>
					<TextInput style={styles.midContainer}
						label="Note title"
						value={form.title}

						onChangeText={(value) => dispatchForm({ type: 'change', payload: { key: 'title', value } })}

					/>
					<TextInput style={styles.midContainer}
						label="Note status"
						value={form.status}
						onChangeText={(value) => dispatchForm({ type: 'change', payload: { key: 'status', value } })}
					/>
					<Button mode="contained" onPress={add}>
						Add Note
          			</Button>
				</View>

				<DataTable>
					<DataTable.Header>
						<DataTable.Title>
							Title
          				</DataTable.Title>
						<DataTable.Title>Status</DataTable.Title>
					</DataTable.Header>
					{
						notes['active'].map((note) => <Note key={note.id} {...note} />)
					}
					{
						notes['completed'].map((note) => <Note key={note.id} {...note} />)
					}
					{
						notes['others'].map((note) => <Note key={note.id} {...note} />)
					}
					
				</DataTable>
			</Card>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		width: '100%',
		padding: 20,
		alignItems: 'center',
	},
	addNote: {
		flexDirection: 'column',
		padding: 10,
		width: '100%',
		alignItems: 'center',
	},
	pad: {
		padding: 20,
		width: '100%',

	},
	midContainer: {
		width: '100%',
		marginBottom: 20,
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
const styles2 = StyleSheet.create({
	container: {
		padding: 20,
		alignItems: 'center',
	},
	midContainer: {
		width: '100%',
		marginBottom: 20,
	},
	pad: {
		padding: 20,
	},
	inpContainer: {
		flexDirection: 'column',
		padding: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
	},

});

export default Notes;
