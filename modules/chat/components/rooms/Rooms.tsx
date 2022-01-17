import { useSockets } from "@context/socket.context";
import { useRef } from "react";
import EVENTS from "@config/events";
import styles from "@modules/chat/components/rooms/Rooms.module.css";

function Rooms() {
	const { socket, roomId, rooms } = useSockets();
	const newRoomRef = useRef<HTMLInputElement | null>(null);

	console.log(rooms);

	function handleCreateRoom() {
		const roomName = newRoomRef.current?.value || "";

		if (!String(roomName).trim()) {
			return;
		}

		socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

		newRoomRef.current!.value = "";
	}

	function handleJoinRoom(key: string) {
		if (key === roomId) {
			return;
		}

		socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
	}

	return (
		<nav className={styles.wrapper}>
			<div className={styles.createRoomWrapper}>
				<input ref={newRoomRef} type="text" placeholder="Room Name" />
				<button className="cta" onClick={handleCreateRoom}>
					Create Room
				</button>
			</div>
			<ul className={styles.roomList}>
				{Object.keys(rooms).map((key) => {
					return (
						<div key={key}>
							<button
								disabled={key === roomId}
								title={`Join ${rooms[key].roomName}`}
								onClick={() => handleJoinRoom(key)}
							>
								{rooms[key].roomName}
							</button>
						</div>
					);
				})}
			</ul>
		</nav>
	);
}

export default Rooms;
