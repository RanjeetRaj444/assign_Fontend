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
		.get("http://localhost:8080/notes")
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
	axios.post("http://localhost:8080/notes/create", data).then((dat) => {
		console.log(dat.data);
	});
};
export const updateProjects = (id, data) => (dispatch) => {
	console.log(id)
	console.log(data)
	axios.patch(`http://localhost:8080/notes/update/${id}`, data);
};
export const deleteProjects = (id) => (dispatch) => {
	axios.delete(`http://localhost:8080/notes/delete/${id}`);
};
