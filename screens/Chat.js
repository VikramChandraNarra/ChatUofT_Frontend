import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import Modal from "../component/Modal";
import ChatComponent from "../component/ChatComponent";
import socket from "../utils/socket";
import { styles } from "../utils/styles";

const Chat = () => {
	const [visible, setVisible] = useState(false);
	const [rooms, setRooms] = useState([]);

	// useLayoutEffect(() => {
	// 	function fetchGroups() {
	// 		fetch("http://localhost:4000/api")
	// 			.then((res) => res.json())
	// 			.then((data) => setRooms(data))
	// 			.catch((err) => console.error(err));
	// 	}
	// 	fetchGroups();
	// }, []);

	// const getUsername = async () => {
	// 	try {
	// 		return value
	// 	} catch (e) {
	// 		console.error("Error while loading username!");
	// 	}
	// };


	useEffect(() => {
		// value = getUsername()
		alert("hello")

		fetch("http://localhost:4000/fetchMockChat", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			// body: JSON.stringify({
			// 	userId: "newid",
			// })
		})
			.then(res => res.json()).then(
				data => {
					console.log(data)
					setRooms(data)

					alert("brother")
				}
			)
			.catch(error => {
				console.error('Error:', error);
			});
		// data.result.courses.map((dat) => {
		// 	fetch("http://localhost:4000/fetchschema", {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			userId: dat,
		// 		})
		// 	})
		// 		.then(res => res.json()).then(
		// 			data => {
		// 				console.log(data.result.courses)
		// 				setRooms(data.result.courses)
		// 			}
		// 		)
		// 		.catch(error => {
		// 			console.error('Error:', error);
		// 		});
		// })

	}, []);

	const handleCreateGroup = () => setVisible(true);

	return (
		<SafeAreaView style={styles.chatscreen}>
			<View style={styles.chattopContainer}>
				<View style={styles.chatheader}>
					<Text style={styles.chatheading}>Chats</Text>
					<Pressable onPress={handleCreateGroup}>
						<Feather name='edit' size={24} color='green' />
					</Pressable>
				</View>
			</View>

			<View style={styles.chatlistContainer}>
				{rooms.length > 0 ? (
					<FlatList
						data={rooms}
						renderItem={({ item }) => <ChatComponent item={item} />}
						// keyExtractor={(item) => item.id}
					/>
				) : (
					<View style={styles.chatemptyContainer}>
						<Text style={styles.chatemptyText}>No rooms created!</Text>
						<Text>Click the icon above to create a Chat room</Text>
					</View>
				)}
			</View>
			{visible ? <Modal setVisible={setVisible} /> : ""}
		</SafeAreaView>
	);
};

export default Chat;
