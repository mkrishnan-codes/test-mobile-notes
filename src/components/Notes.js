import React, { useReducer, useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card, TextInput, Button, DataTable, RadioButton } from 'react-native-paper';
import { formReducer } from '../reducers/form-reducer';
import { NotesReducer, initialState } from '../reducers/notes-reducer';
import NoteRow from './NoteRow';
import { getData, storeData } from '../utils/localstorage';
const STORE_KEY = 'notes'
const Notes = () => {
	const [value, setValue] = useState('all');
	const [form, dispatchForm] = useReducer(formReducer, { title: '', status: '' });
	const [notes, dispatchNotes] = useReducer(NotesReducer, initialState);
	useEffect(() => {
		const getLocalData = async () => {
			const data = await getData(STORE_KEY);
			if (data) {
				dispatchNotes({ type: 'load_new', payload: data })
			}
		}
		getLocalData();
	}, []);
	useEffect(() => {
		return () => {
			const setLocalData = async () => {
				await storeData(STORE_KEY, notes);
			}
			setLocalData();
		}
	}, [notes]);
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
				{notes.showList && <ScrollView style={styles.scroller}><View style={styles.filters}>
					<RadioButton.Group onValueChange={value => setValue(value)} value={value}>
						<View style={styles.radio}>
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
	},
	scroller: {
		maxHeight: 240,
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
	radio:{
		alignItems:'center',
	},
	midContainer: {
		width: '100%',
		marginBottom: 20,
	},

	inpContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'

	},
	head: {
		fontSize: 20,
		paddingVertical: 20,
		fontWeight: 'bold'
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
