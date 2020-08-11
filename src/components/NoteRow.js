import React from 'react';
import { DataTable } from 'react-native-paper';

const NoteRow = (props) => {
	return (
		<DataTable.Row>
			<DataTable.Cell>{props.title}</DataTable.Cell>
			<DataTable.Cell>{props.status}</DataTable.Cell>
		</DataTable.Row>
	)
}

export default NoteRow;
