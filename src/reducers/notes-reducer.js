export const initialState = {
	active: [], completed: [], others: [],
	currentNote: '', currentStatus: ''
}
const getObjWithId = (payload) => {
	let obj = { ...payload, id: new Date().getTime() }
	return obj;
}
export const NotesReducer = (state, action) => {
	switch (action.type.toLowerCase()) {
		case 'active': {
			const { active, completed, others } = state;
			active.push(getObjWithId(action.payload))
			return { 'active': [...active], 'completed': [...completed], 'others': [...others] };

		}
		case 'completed': {
			const { active, completed, others } = state;
			completed.push(getObjWithId(action.payload))
			return { 'active': [...active], 'completed': [...completed], 'others': [...others] };

		}
		default: {
			const { active, completed, others } = state;
			others.push(getObjWithId(action.payload))
			return { 'active': [...active], 'completed': [...completed], 'others': [...others] };
		}
	}
}