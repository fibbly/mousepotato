import { FunctionComponent, useEffect, useState } from "react";
import styles from "@modules/auth/Auth.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

const Auth: FunctionComponent = () => {
	const { data: session } = useSession();
	const [token, setData] = useState(null);
	useEffect(() => {
		fetch("api/auth/token")
			.then((res) => res.json())
			.then((token) => {
				setData(token);
			});
	}, []);
	if (session && token) {
		return auth(session, token);
	} else {
		return unauth();
	}
};

function auth(session: Session, token: JWT) {
	return (
		<section id="auth" className={styles.auth}>
			<h1>Authentication</h1>
			<img src="/images/github.png" className={styles.github} />
			<p>Signed in as {session!.user?.email}</p>
			<br />
			<button
				onClick={() => signOut({ callbackUrl: process.env.AUTH_CALLBACK_URL })}
			>
				Sign out
			</button>
			<div className={styles.token}>
				<pre>{JSON.stringify(token, null, 2)}</pre>
			</div>
		</section>
	);
}

function unauth() {
	return (
		<section id="auth" className={styles.auth}>
			<h1>Authentication</h1>
			<p>Not signed in</p>
			<button
				onClick={() =>
					signIn("github", { callbackUrl: process.env.AUTH_CALLBACK_URL })
				}
			>
				Sign in with Github
			</button>
		</section>
	);
}

export default Auth;
