import { useSockets } from "@context/socket.context";
import { useEffect, useRef } from "react";
import EVENTS from "@config/events";
import moment from "moment";
import styles from "@modules/chat/components/messages/Messages.module.css";

function Messages() {
	const { socket, messages, roomId, username, setMessages } = useSockets();
	const messageRef = useRef<HTMLTextAreaElement | null>(null);
	const messageEndRef = useRef<HTMLInputElement | null>(null);

	function handleSendMessage() {
		const message = messageRef.current?.value;

		if (!String(message).trim()) {
			return;
		}

		socket.emit(EVENTS.CLIENT.SEND_MESSAGE, { roomId, message, username });

		setMessages([
			...messages!,
			{
				username: "You",
				message,
				time: moment().format("h:mm a"),
			},
		]);

		messageRef.current!.value = "";
	}

	if (!roomId) {
		return <div />;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.messageList}>
				{messages?.map(({ message, username, time }, index) => {
					return (
						<div key={index} className={styles.message}>
							<span className={styles.messageSender}>
								{username} - {time}
							</span>
							<span className={styles.messageBody}>{message}</span>
						</div>
					);
				})}
				<div ref={messageEndRef} />
			</div>
			<div className={styles.messageBox}>
				<textarea rows={1} placeholder="Send a message..." ref={messageRef} />
				<button onClick={handleSendMessage}>Send</button>
			</div>
		</div>
	);
}

export default Messages;
