const initialState = {
	list: [],
	// other state ...
};

const jobReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_JOB": {
			// For referecnce types that must be copied to a new object
			// Should not be changed directly
			const newList = [...state.list]; // or state.list.slice()
			newList.push(action.payload);

			return {
				...state,
				list: newList,
			};
		}

		case "DELETE_JOB": {
			return state;
		}

		case "RENAME_JOB": {
			return state;
		}

		case "ACTIVE_JOB": {
			return state;
		}

		// other action type ...

		default:
			return state;
	}
};

export default jobReducer;
