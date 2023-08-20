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
import { postProjects } from "../Redux/action";
import { useDispatch } from "react-redux";

const DrawerExample = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState({
		title: "",
		body: "",
	});
	const dispatch = useDispatch();
	const firstField = React.useRef();
	function handleSubmit(e) {
		e.preventDefault();
		dispatch(postProjects(data));
	}
	function handleChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}
	return (
		<>
			<Button color={"black"} colorScheme="teal" onClick={onOpen}>
				Add Data
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
					<DrawerHeader borderBottomWidth="1px">Add a new Data</DrawerHeader>
					<DrawerBody>
						<form action="" onSubmit={handleSubmit}>
							<Box>
								<FormLabel htmlFor="username">Title</FormLabel>
								<Input
									ref={firstField}
									onChange={handleChange}
									name="title"
									placeholder="Title"
								/>
							</Box>

							<Box>
								<FormLabel htmlFor="desc">Body</FormLabel>
								<Textarea
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

export default DrawerExample;
