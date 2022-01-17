import { FunctionComponent, useEffect, useRef } from "react";
import { useSockets } from "@context/socket.context";
import Rooms from "@modules/chat/components/rooms/Rooms";
import Messages from "@modules/chat/components/messages/Messages";
import styles from "@modules/chat/Chat.module.css";

const Chat: FunctionComponent = () => {
	const { username, setUsername } = useSockets();
	const usernameRef = useRef<HTMLInputElement | null>(null);

	function handleSetUsername() {
		const value = usernameRef.current?.value;

		if (!value) {
			return;
		}

		setUsername(value);
		localStorage.setItem("username", value);
	}

	// useEffect(() => {
	// 	if (usernameRef) {
	// 		usernameRef.current!.value = localStorage.getItem("username") || "";
	// 	}
	// }, []);

	return (
		<section className={styles.section}>
			<h1>Chat</h1>
			{!username && (
				<div className={styles.usernameWrapper}>
					<div className={styles.usernameInner}>
						<input placeholder="Username" ref={usernameRef} />
						<button className="cta" onClick={handleSetUsername}>
							Start
						</button>
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
