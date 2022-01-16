import io from "socket.io-client";
import { SOCKET_URL } from "@config/default";
import { createContext, useContext } from "react";

const socket = io(SOCKET_URL);

const SocketContext = createContext({ socket });

function SocketsProvider(props: any) {
	return <SocketContext.Provider {...props} value={{ socket }} />;
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;