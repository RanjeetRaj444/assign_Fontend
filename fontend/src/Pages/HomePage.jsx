import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../Redux/action";
import { Heading } from "@chakra-ui/react";
import DrawerExample from "../Components/Input";

const HomePage = () => {
	const dispatch = useDispatch();
	const data = useSelector((store) => store.reducer.data);
	// console.log(data.note);
	useEffect(() => {
		dispatch(getProjects());
	},[]);

	return (
		<div>
			<div className="heading">
				<Heading>Crud App</Heading>
			</div>
			<div className="body">
				<div className="btnSection">
					<DrawerExample />
				</div>
				<div className="cardSection">
					{data.note &&
						data.note.map((ele, ind) => <Card key={ind} ele={ele} />)}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
