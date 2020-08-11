export const initialState = {
	operand: '+',
	result: '',
	operations: 0,
};
export const CalculatorReducer = (state, action) => {
	switch (action.type) {
		case 'add': {
			const operations = state.operations + 1;
			return {
				...state,
				operand: '+',
				result: Number(action.payload.number1) + Number(action.payload.number2),
				operations,
			};
		}
		case 'subtract': {
			const operations = state.operations + 1;

			return {
				...state,
				operand: '-',
				result: Number(action.payload.number1) - Number(action.payload.number2),
				operations,
			};
		}
		case 'multiply': {
			const operations = state.operations + 1;

			return {
				...state,
				operand: '*',
				result: Number(action.payload.number1) * Number(action.payload.number2),
				operations,
			};
		}
		case 'divide': {
			const operations = state.operations + 1;

			return {
				...state,
				operand: '/',
				result: Number(action.payload.number1) / Number(action.payload.number2),
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