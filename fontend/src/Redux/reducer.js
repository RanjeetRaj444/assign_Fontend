import {
	GET_REQUEST,
	GET_REQUEST_FAIL,
	GET_REQUEST_SUCCESS,
} from "./actionTypes";

const InitialState = {
	data: [],
	isLoading: false,
	isError: false,
};

export const reducer = (state = InitialState, { type, payload }) => {
	switch (type) {
		case GET_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case GET_REQUEST_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				data: payload,
			};
		case GET_REQUEST_FAIL:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
