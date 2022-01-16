import { useSockets } from "@context/socket.context";
import { useRef } from "react";
import EVENTS from "@config/events";
import moment from "moment";

function Messages() {
	const { socket, messages, roomId, username, setMessages } = useSockets();
	const messageRef = useRef<HTMLTextAreaElement | null>(null);

	if (!roomId) {
		return <div />;
	}

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
	}

	return (
		<div>
			{messages?.map(({ message }, index) => {
				return <p key={index}>{message}</p>;
			})}
			<div>
				<textarea rows={1} placeholder="Send message..." ref={messageRef}>
					<button onClick={handleSendMessage}>Send</button>
				</textarea>
			</div>
		</div>
	);
}

export default Messages;
