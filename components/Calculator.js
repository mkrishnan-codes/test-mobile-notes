import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
const initialState = {
	number1: '',
	number2: '',
	operand: '+',
	result: '',
	operations: 0,
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'set_number1': {
			return { ...state, number1: action.payload };
		}
		case 'set_number2': {
			return { ...state, number2: action.payload };
		}
		case 'add': {
			const operations = state.operations + 1;
			return {
				...state,
				operand: '+',
				result: Number(state.number1) + Number(state.number2),
				operations,
			};
		}
		case 'subtract': {
			const operations = state.operations + 1;

			return {
				...state,
				operand: '-',
				result: Number(state.number1) - Number(state.number2),
				operations,
			};
		}
		case 'multiply': {
			const operations = state.operations + 1;

			return {
				...state,
				operand: '*',
				result: Number(state.number1) * Number(state.number2),
				operations,
			};
		}
		case 'divide': {
			const operations = state.operations + 1;

			return {
				...state,
				operand: '/',
				result: Number(state.number1) / Number(state.number2),
				operations,
			};
		}
		case 'reset': {
			return { ...initialState, operations: state.operations };
		}
		default:
			return state;
	}
};
const Calculator = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<View style={styles.container}>
			<View>
				<Text>Total operations performed: {state.operations}</Text>
			</View>
			<Card style={styles.pad}>
				<View style={styles.inpContainer}>
					<TextInput
						style={[styles.midContainer]}
						label="Eg. 1"
						value={state.number1}
						onChangeText={(payload) =>
							dispatch({ type: 'set_number1', payload })
						}
					/>
					<View style={[styles.midContainer, styles.middle]}>
						<Text>{state.operand}</Text>
					</View>
					<TextInput
						style={[styles.midContainer]}
						label="Eg. 2"
						value={state.number2}
						onChangeText={(payload) =>
							dispatch({ type: 'set_number2', payload })
						}
					/>
				</View>
				<View style={styles.inpContainer}>
					<Button mode="contained" onPress={() => dispatch({ type: 'add' })}>
						+
          			</Button>
					<Button
						mode="contained"
						onPress={() => dispatch({ type: 'subtract' })}>
						-
          			</Button>
					<Button
						mode="contained"
						onPress={() => dispatch({ type: 'multiply' })}>
						*
          			</Button>
					<Button mode="contained" onPress={() => dispatch({ type: 'divide' })}>
						/
          			</Button>
				</View>
				<View style={styles.inpContainer}>
					<Button mode="contained" onPress={() => dispatch({ type: 'reset' })}>
						Reset
          			</Button>
					{state.result ? (
						<View>
							<Text>Result: {state.result}</Text>
						</View>
					) : null}
				</View>
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

export default Calculator;
