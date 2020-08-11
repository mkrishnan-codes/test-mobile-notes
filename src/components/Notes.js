import React, { useReducer, useState } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Card, TextInput, Button, DataTable, RadioButton } from 'react-native-paper';
import { formReducer } from '../reducers/form-reducer';
import { NotesReducer, initialState } from '../reducers/notes-reducer';
import NoteRow from './NoteRow';

const Notes = () => {
	const [value, setValue] = useState('all');
	const [form, dispatchForm] = useReducer(formReducer, { title: '', status: '' });
	const [notes, dispatchNotes] = useReducer(NotesReducer, initialState);
	const add = () => {
		dispatchNotes({ type: form.status, payload: form })
		dispatchForm({ type: 'reset' });
	}
	return (
		<View style={styles.container}>
			<View style={styles.inpContainer}>
				<Text style={styles.head}>Notes</Text>
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
				{notes.showList && <React.Fragment><View style={styles.filters}>
					<RadioButton.Group onValueChange={value => setValue(value)} value={value}>
						<View>
							<Text>All</Text>
							<RadioButton value="all" />
						</View>
						<View>
							<Text>Active</Text>
							<RadioButton value="active" />
						</View>
						<View>
							<Text>Completed</Text>
							<RadioButton value="completed" />
						</View>
					</RadioButton.Group>
				</View>
					<ScrollView style={styles.scroller}>
						<DataTable>
							<DataTable.Header>
								<DataTable.Title>
									Title
          				</DataTable.Title>
								<DataTable.Title>Status</DataTable.Title>
							</DataTable.Header>
							{
								(value === 'active' || value === 'all') && notes['active'].map((note) => <NoteRow key={note.id} {...note} />)
							}
							{
								(value === 'completed' || value === 'all') && notes['completed'].map((note) => <NoteRow key={note.id} {...note} />)
							}
							{
								(value === 'all') && notes['others'].map((note) => <NoteRow key={note.id} {...note} />)
							}

						</DataTable>
					</ScrollView>
				</React.Fragment>
				}
			</Card>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		width: '100%',
		flex: 1,
		padding: 20,
	},
	scroller: {
		maxHeight: 350,
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
		padding: 15,
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',

	},
	head: {
		fontSize: 18,
		paddingVertical: 20,
	},
	middle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	filters: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
});


export default Notes;
