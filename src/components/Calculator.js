import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { CalculatorReducer, initialState } from '../reducers/calculator-reducer';


const Calculator = () => {
	const [state, dispatch] = useReducer(CalculatorReducer, initialState);
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
		padding: 20,
		alignItems:'center',
		flexDirection: 'column',

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
