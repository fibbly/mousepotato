import { FunctionComponent, useRef } from "react";
import { useSockets } from "@context/socket.context";
import Rooms from "@modules/chat/components/Rooms";
import Messages from "@modules/chat/components/Messages";
import styles from "@modules/chat/Chat.module.css";

const Chat: FunctionComponent = () => {
	const { socket, username, setUsername } = useSockets();
	const usernameRef = useRef(null);

	function handleSetUsername() {
		const value = usernameRef.current;
		if (!value) {
			return;
		}
		setUsername(value);
		localStorage.setItem("username", value);
	}

	return (
		<section>
			<h1>Chat</h1>
			{!username && (
				<div className={styles.usernameWrapper}>
					<div className={styles.usernameInner}>
						<input placeholder="Username" ref={usernameRef} />
						<button onClick={handleSetUsername}>Start</button>
					</div>
				</div>
			)}
			{username && (
				<div className={styles.container}>
					<Rooms />
					<Messages />
				</div>
			)}
		</section>
	);
};

export default Chat;
