import { useSockets } from "@context/socket.context";
import { useRef } from "react";
import EVENTS from "@config/events";

function Rooms() {
	const { socket, roomId, rooms } = useSockets();
	const newRoomRef = useRef<HTMLInputElement | null>(null);

	function handleCreateRoom() {
		const roomName = newRoomRef.current?.value || "";

		if (!String(roomName).trim()) {
			return;
		}

		socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

		newRoomRef.current!.value = "";
	}

	return (
		<nav>
			<div>
				<input ref={newRoomRef} type="text" placeholder="Room Name" />
				<button onClick={handleCreateRoom}>Create Room</button>
			</div>
			{Object.keys(rooms).map((key) => {
				return <div key={key}>{rooms[key].roomName}</div>;
			})}
		</nav>
	);
}

export default Rooms;
