import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import THREE from "three";
import { Point, Points } from "@react-three/drei";

const count = 5000;

const Stars: React.FC<MeshProps> = (props) => {
	const points = useRef<THREE.Points>(null!);

	const positions = new Float32Array(count * 3);

	for (let i = 0; i < count * 3; i++) {
		positions[i] = (Math.random() - 0.5) * 10;
	}

	return (
		<points ref={points} position={[0, 0, -500]} scale={[1000, 100, 10]}>
			<bufferGeometry>
				<bufferAttribute
					attachObject={["attributes", "position"]}
					count={positions.length / 3}
					array={positions}
					itemSize={3}
				></bufferAttribute>
			</bufferGeometry>
			<pointsMaterial color="white" size={0.01} sizeAttenuation={true} />
		</points>
	);
};

export default Stars;
