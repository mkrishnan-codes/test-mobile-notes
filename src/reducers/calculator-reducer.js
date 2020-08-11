export const initialState = {
	number1: '',
	number2: '',
	operand: '+',
	result: '',
	operations: 0,
};
export const CalculatorReducer = (state, action) => {
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