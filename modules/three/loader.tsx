import { Html, useProgress } from "@react-three/drei";
import styles from "@modules/three/Three.module.css";

const Loader = () => {
	const { progress } = useProgress();
	return (
		<Html className={styles.loader} center>
			{progress} % loaded
		</Html>
	);
};

export default Loader;
