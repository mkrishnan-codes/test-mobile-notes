import React, { useReducer, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { CalculatorReducer, initialState } from '../reducers/calculator-reducer';
import { formReducer } from '../reducers/form-reducer';


const Calculator = () => {
	const [state, dispatch] = useReducer(CalculatorReducer, initialState);
	const [form, dispatchForm] = useReducer(formReducer, { 'number1': '', 'number2': '' });
	const reset = useCallback(() => {
		dispatchForm({ type: 'reset' })
		dispatch({ type: 'reset' })
	}, [dispatchForm, dispatch])
	return (
		<View style={styles.container}>
			<View>
				<Text style={[styles.head]}>Calculator</Text>
			</View>
			<View>
				<Text style={[styles.head2]}>Total operations performed: {state.operations}</Text>
			</View>
			<Card style={styles.pad}>
				<View style={styles.inpContainer}>
					<TextInput
						style={[styles.midContainer]}
						label="Eg. 1"
						value={form.number1}
						onChangeText={(value) =>
							dispatchForm({ type: 'change', payload: { key: 'number1', value } })
						}
					/>
					<View style={[styles.midContainer, styles.middle]}>
						<Text>{state.operand}</Text>
					</View>
					<TextInput
						style={[styles.midContainer]}
						label="Eg. 2"
						value={form.number2}
						onChangeText={(value) =>
							dispatchForm({ type: 'change', payload: { key: 'number2', value } })
						}
					/>
				</View>
				<View style={styles.inpContainer}>
					<Button mode="contained" onPress={() => dispatch({ type: 'add', payload: form })}>
						+
          			</Button>
					<Button
						mode="contained"
						onPress={() => dispatch({ type: 'subtract', payload: form })}>
						-
          			</Button>
					<Button
						mode="contained"
						onPress={() => dispatch({ type: 'multiply', payload: form })}>
						*
          			</Button>
					<Button mode="contained" onPress={() => dispatch({ type: 'divide', payload: form })}>
						/
          			</Button>
				</View>
				<View style={styles.inpContainer}>
					<Button raised theme={{colors:{primary:'#c0392b'}}} mode="contained" onPress={reset}>
						Reset
          			</Button>
					{state.result ? (
						<Text style={styles.result}>Result: {state.result}</Text>
					) : null}
				</View>
			</Card>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		padding: 5,
		alignItems: 'center',
		flexDirection: 'column',
		height: '75%'
	},
	head: {
		fontSize: 20,
		paddingVertical: 20,
		fontWeight: 'bold'
	},
	head2: {
		fontSize: 18,
		paddingVertical: 20,
	},
	pad: {
		padding: 20,
		height: 300,
	},
	midContainer: {
		width: '30%',
	},
	result: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	inpContainer: {
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	middle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Calculator;
