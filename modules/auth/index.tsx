import { FunctionComponent, useEffect, useState } from "react";
import styles from "@modules/auth/Auth.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Repo from "common/types/repo";

const Auth: FunctionComponent = () => {
	const { data: session } = useSession();
	const [token, setToken] = useState(null);
	const [repos, setRepos] = useState(null);

	useEffect(() => {
		fetch("api/auth/token")
			.then((res) => res.json())
			.then((token) => {
				setToken(token);
				fetch(`https://api.github.com/users/${token.name}/repos`, {
					method: "GET",
				})
					.then((res) => res.json())
					.then((repos) => setRepos(repos));
			});
	}, []);

	if (session && token && repos) {
		return auth(session, token, repos);
	} else {
		return unauth();
	}
};

function auth(session: Session, token: JWT, repos: Repo[]) {
	return (
		<section id="auth" className={styles.auth}>
			<h1>Authentication</h1>
			<img
				src={session.user?.image || "/images/github.png"}
				className={styles.github}
			/>
			<h3 className={styles.username}>
				Welcome, {session.user?.name || "Github User"}!
			</h3>
			<p>Signed in as {session!.user?.email}</p>
			<br />
			<button
				onClick={() => signOut({ callbackUrl: process.env.AUTH_CALLBACK_URL })}
			>
				Sign out
			</button>
			<div className={styles.flex}>
				<div className={styles.code}>
					<pre>{JSON.stringify(token, null, 2)}</pre>
				</div>
				<div className={styles.code}>
					<pre>{`"repos": ` + JSON.stringify(repos, null, 2)}</pre>
				</div>
			</div>
		</section>
	);
}

function unauth() {
	return (
		<section id="auth" className={styles.auth}>
			<h1>Authentication</h1>
			<img src="/images/github.png" className={styles.github} />
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
