import axios from "axios";
import {
	GET_REQUEST,
	GET_REQUEST_FAIL,
	GET_REQUEST_SUCCESS,
} from "./actionTypes";

export const getProjects = () => (dispatch) => {
	// console.log("hi")
	dispatch({ type: GET_REQUEST });
	axios
		.get("https://assignment-full-stackj-crud-app.onrender.com/notes")
		.then((data) => {
			dispatch({ type: GET_REQUEST_SUCCESS, payload: data.data });
			// console.log(data.data);
		})
		.catch((err) => {
			dispatch({ type: GET_REQUEST_FAIL });
			console.log({ err: err.message });
		});
};

export const postProjects = (data) => () => {
	axios
		.post(
			"https://assignment-full-stackj-crud-app.onrender.com/notes/create",
			data,
		)
		.then((dat) => {
			console.log(dat.data);
		});
};
export const updateProjects = (id, data) => (dispatch) => {
	console.log(id);
	console.log(data);
	axios.patch(
		`https://assignment-full-stackj-crud-app.onrender.com/notes/update/${id}`,
		data,
	);
};
export const deleteProjects = (id) => (dispatch) => {
	axios.delete(
		`https://assignment-full-stackj-crud-app.onrender.com/notes/delete/${id}`,
	);
};
