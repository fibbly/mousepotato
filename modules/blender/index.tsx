import { FunctionComponent } from "react";
import styles from "./Blender.module.css";

const Blender: FunctionComponent = () => {
	return (
		<section className={styles.section}>
			<div className={styles.wave}>
				<svg
					className={styles.shadow}
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className={styles.shapeFill}
					></path>
				</svg>
			</div>
			<div className={styles.flex}>
				<video
					src="https://mousepotato.s3.us-east-2.amazonaws.com/donut.mp4"
					autoPlay
					loop
				></video>
				<div className={styles.content}>
					<h1>Blender</h1>
					<p>The Beginner&#39;s Donut.</p>
					<p>Made with Blender 3.0</p>
				</div>
			</div>
		</section>
	);
};

export default Blender;
