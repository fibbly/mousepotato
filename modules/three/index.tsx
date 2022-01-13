import { FunctionComponent, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./models/Box";

const Three: FunctionComponent = () => {
	return (
		<Canvas>
			<OrbitControls enableZoom={false} />
			<pointLight intensity={1} position={[10, 10, 10]} />
			<pointLight intensity={1} position={[-10, 10, -10]} />
			<Suspense fallback={null}>
				<Box />
			</Suspense>
		</Canvas>
	);
};

export default Three;
