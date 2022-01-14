import { FunctionComponent, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "@modules/three/models/Earth";
import styles from "@modules/three/Three.module.css";
import Loader from "@modules/three/components/loader";
import Stars from "@modules/three/components/stars";

const Three: FunctionComponent = () => {
	return (
		<section className={styles.three}>
			<Canvas>
				<color attach="background" args={["black"]} />
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					enableRotate={true}
					minZoom={0}
					maxZoom={1}
					enableDamping={true}
					minPolarAngle={Math.PI * 0.5}
					maxPolarAngle={Math.PI * 0.5}
					minAzimuthAngle={-(Math.PI * 0.05)}
					maxAzimuthAngle={Math.PI * 0.05}
				/>
				<pointLight intensity={1} position={[10, 10, 10]} />
				<pointLight intensity={1} position={[-10, 10, -10]} />
				<Suspense fallback={<Loader />}>
					<Earth position={[0, 100, -500]} />
					<Stars />
				</Suspense>
			</Canvas>
			<h1 className={styles.neon}>Hello World</h1>
		</section>
	);
};

export default Three;
