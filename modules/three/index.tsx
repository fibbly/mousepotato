import { FunctionComponent, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "@modules/three/models/Earth";
import styles from "@modules/three/Three.module.css";
import Loader from "@modules/three/loader";

const Three: FunctionComponent = () => {
	return (
		<section className={styles.three}>
			<Canvas>
				<color attach="background" args={["black"]} />
				<OrbitControls enableZoom={false} />
				<pointLight intensity={1} position={[10, 10, 10]} />
				<pointLight intensity={1} position={[-10, 10, -10]} />
				<Suspense fallback={<Loader />}>
					<Earth position={[0, 0, -500]} />
				</Suspense>
			</Canvas>
		</section>
	);
};

export default Three;
