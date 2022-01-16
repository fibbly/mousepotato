import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import SocketsProvider from "@context/socket.context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<SocketsProvider>
				<Component {...pageProps} />
			</SocketsProvider>
		</SessionProvider>
	);
}

export default MyApp;
