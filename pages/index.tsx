import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import modules from "@modules/index";
import React from "react";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Mouse Potato</title>
				<meta name="description" content="Portfolio generated using Next.js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				{modules.map((Module, index) => {
					return (
						<section key={index} className={styles.section}>
							<Module />
						</section>
					);
				})}
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
};

export default Home;
