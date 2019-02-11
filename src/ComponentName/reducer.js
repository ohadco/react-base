const initialState = {
    isLoading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'NONE':
			return {
				...state,
				isLoading: true
			}

		default:
			return state
	}
}
