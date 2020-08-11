export const formReducer = (state, action) => {
	switch (action.type) {
		case 'change': {
			let newState = { ...state };
			newState[action.payload.key] = action.payload.value;
			return newState
		}
		case 'reset': {
			let newState = {};
			Object.keys(state).map((key) => newState[key] = '')
			return newState;
		}
		default: return state;
	}
}