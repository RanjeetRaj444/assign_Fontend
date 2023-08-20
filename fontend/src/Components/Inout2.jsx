import {
	Drawer,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Box,
	FormLabel,
	Input,
	Textarea,
	useDisclosure,
	DrawerBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { postProjects, updateProjects } from "../Redux/action";
import { useDispatch } from "react-redux";

const Edit = ({ ele }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState({ title: ele.title, body: ele.body });
	// console.log(ele._id)
	const dispatch = useDispatch();
	const firstField = React.useRef();
	function handleSubmit(e) {
		e.preventDefault();
		dispatch(updateProjects(ele._id, data));
	}
	function handleChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}
	return (
		<>
			<Button color={"black"} colorScheme="teal" onClick={onOpen}>
				Edit
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				initialFocusRef={firstField}
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">Edit Data</DrawerHeader>
					<DrawerBody>
						<form action="" onSubmit={handleSubmit}>
							<Box>
								<FormLabel htmlFor="username">Title</FormLabel>
								<Input
									value={data.title}
									ref={firstField}
									onChange={handleChange}
									name="title"
									placeholder="Title"
								/>
							</Box>

							<Box>
								<FormLabel htmlFor="desc">Body</FormLabel>
								<Textarea
									value={ele.body}
									id="desc"
									onChange={handleChange}
									name="body"
									placeholder="Body"
								/>
							</Box>
							<Box>
								<Button type="submit" colorScheme="blue">
									Add
								</Button>
							</Box>
						</form>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Edit;
