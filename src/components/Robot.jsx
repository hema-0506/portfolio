import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useMotionValue, useSpring } from 'motion/react'
import { useFrame } from '@react-three/fiber'

export function Robot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/tour_ia.glb')
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]); 

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, {damping:100})

  useEffect(() => {
    ySpring.set(-170);
  }, [ySpring]);
  useFrame(() => {
    group.current.position.y = ySpring.get()
  });
  

  return (
    <group ref={group} {...props} 
    dispose={null}
    rotation={[-Math.PI / 2, 0, -0.5]}
    scale={props.scale || 1}
    position={props.position || [200,-170,1]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="bb57980ed1b9400a920cbf6dd7f551b4fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials['Material.002']}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    {/* <group name="Object_15" rotation={[-Math.PI / 2, 0, 0]} scale={52.526} />
                    <group name="Object_18" rotation={[-Math.PI / 2, 0, 0]} scale={52.571} /> */}
                  </group>
                </group>
                {/* <group name="Avatar" rotation={[-Math.PI / 2, 0, 0]} scale={52.526} />
                <group name="Face" rotation={[-Math.PI / 2, 0, 0]} scale={52.571} /> */}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/tour_ia.glb')
