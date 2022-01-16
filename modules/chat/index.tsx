import { FunctionComponent } from "react";
import { useSockets } from "@context/socket.context";

const Chat: FunctionComponent = () => {
	const { socket } = useSockets();
	return (
		<section>
			<h1>Chat</h1>
			<p>{socket.id}</p>
		</section>
	);
};

export default Chat;
