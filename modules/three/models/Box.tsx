import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Box: React.FC<MeshProps> = (props) => {
	const mesh = useRef<THREE.Mesh>(null!);

	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	useFrame(() => (mesh.current.rotation.x += 0.01));

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 2, 3]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
};

export default Box;
