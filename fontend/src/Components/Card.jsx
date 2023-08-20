import { Button, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import Edit from "./Inout2";
import { useDispatch } from "react-redux";
import { deleteProjects } from "../Redux/action";

const Card = ({ ele }) => {
	// console.log(ele.title);
	const dispatch = useDispatch();
	function handleClick() {
		dispatch(deleteProjects(ele._id));
	}
	return (
		<DIV className="card">
			<Heading>{ele.title}</Heading>
			<p>{ele.body}</p>
			<div className="btn">
				<Edit ele={ele} />
				<Button onClick={handleClick}>Delete</Button>
			</div>
		</DIV>
	);
};
const DIV = styled.div`
	.btn {
		align-items: center;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
`;
export default Card;
