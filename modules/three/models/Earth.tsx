/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: AirStudios (https://sketchfab.com/sebbe613)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-5f9c35be31a047928eace8b415a8ee3a
title: Earth
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
	nodes: {
		pSphere1_phong1_0: THREE.Mesh;
		pSphere1_phong1_0_1: THREE.Mesh;
		pSphere4_lambert6_0: THREE.Mesh;
		pSphere4_lambert6_0_1: THREE.Mesh;
		pSphere5_lambert7_0: THREE.Mesh;
		pSphere5_lambert7_0_1: THREE.Mesh;
	};
	materials: {
		phong1: THREE.MeshStandardMaterial;
		lambert6: THREE.MeshStandardMaterial;
		lambert7: THREE.MeshStandardMaterial;
	};
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>();
	const { nodes, materials } = useGLTF(
		"../models/earth/earth.glb"
	) as GLTFResult;

	useFrame(() => (group.current!.rotation.y -= 0.001));

	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<group scale={96.72}>
						<mesh
							geometry={nodes.pSphere1_phong1_0.geometry}
							material={nodes.pSphere1_phong1_0.material}
						/>
						<mesh
							geometry={nodes.pSphere1_phong1_0_1.geometry}
							material={nodes.pSphere1_phong1_0_1.material}
						/>
					</group>
					<group scale={97.46}>
						<mesh
							geometry={nodes.pSphere4_lambert6_0.geometry}
							material={nodes.pSphere4_lambert6_0.material}
						/>
						<mesh
							geometry={nodes.pSphere4_lambert6_0_1.geometry}
							material={nodes.pSphere4_lambert6_0_1.material}
						/>
					</group>
					<group scale={98.1}>
						<mesh
							geometry={nodes.pSphere5_lambert7_0.geometry}
							material={nodes.pSphere5_lambert7_0.material}
						/>
						<mesh
							geometry={nodes.pSphere5_lambert7_0_1.geometry}
							material={nodes.pSphere5_lambert7_0_1.material}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("../models/earth/earth.glb");
