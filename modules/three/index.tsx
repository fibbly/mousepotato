import { FunctionComponent, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "@modules/three/models/Earth";
import styles from "@modules/three/Three.module.css";
import Loader from "@modules/three/components/loader";
import Stars from "@modules/three/components/stars";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Three: FunctionComponent = () => {
	// Instantiate a loader
	//const loader = new DRACOLoader();

	// Specify path to a folder containing WASM/JS decoding libraries.
	//loader.setDecoderPath("../node_modules/three/examples/js/libs/draco/");

	// Optional: Pre-fetch Draco WASM/JS module.
	//loader.preload();

	return (
		<section className={styles.three}>
			<Canvas>
				<color attach="background" args={["black"]} />
				<pointLight intensity={1} position={[10, 10, 10]} />
				<pointLight intensity={1} position={[-10, 10, -10]} />
				<Suspense fallback={<Loader />}>
					{/* <Earth position={[0, 100, -500]} /> */}
					<Stars />
				</Suspense>
			</Canvas>
			<h1 className={styles.neon}>Hello World</h1>
		</section>
	);
};

export default Three;
