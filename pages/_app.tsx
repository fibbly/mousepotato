import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import SocketsProvider from "@context/socket.context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SocketsProvider>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
			</SessionProvider>
		</SocketsProvider>
	);
}

export default MyApp;
