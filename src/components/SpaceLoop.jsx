import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function SpaceLoop(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/space_loop_city.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // The name of the animation can be found in the animations array
    // or by logging the 'actions' object.
    // Replace "animation_0" with the actual name of your animation clip.
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]); // Re-run if actions change

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="b58fc570f128404db807b88ffa50d45ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="RD_H_Middle14" position={[-21500, 0, -5350]} />
                <group name="RD_H_Middle15" position={[-28700, 0, -5350]} />
                <group name="RD_H_Middle16" position={[-14300, 0, -5350]} />
                <group name="RD_H_Middle17" position={[-7100, 0, -5350]} />
                <group name="RD_H_Middle18" position={[100, 0, -5350]} />
                <group
                  name="RD_H_Middle19"
                  position={[-8900, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle20"
                  position={[-5300, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle22"
                  position={[-1700, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle23"
                  position={[-26900, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle24"
                  position={[-25100, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle25"
                  position={[-19700, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle26"
                  position={[-17900, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle27"
                  position={[-16100, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle28"
                  position={[-12500, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle30"
                  position={[-8900, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle31"
                  position={[-7100, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle32"
                  position={[-12500, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group name="RD_H_Middle33" position={[-28700, 0, -10750]} />
                <group name="RD_H_Middle34" position={[-28700, 0, -8950]} />
                <group name="RD_H_Middle36" position={[-10700, 0, -12550]} />
                <group name="RD_H_Middle37" position={[-10700, 0, -10750]} />
                <group name="RD_H_Middle38" position={[-10700, 0, -8950]} />
                <group name="RD_H_Middle39" position={[100, 0, -8950]} />
                <group name="RD_H_Middle40" position={[100, 0, -12550]} />
                <group name="RD_H_Middle41" position={[-7100, 0, -10750]} />
                <group name="RD_H_Middle42" position={[-7100, 0, -8950]} />
                <group name="RD_H_Middle43" position={[-7100, 0, -12550]} />
                <group name="RD_H_Middle44" position={[-14300, 0, -12550]} />
                <group name="RD_H_Middle45" position={[-14300, 0, -10750]} />
                <group name="RD_H_Middle46" position={[-14300, 0, -8950]} />
                <group name="RD_H_Middle47" position={[-21500, 0, -12550]} />
                <group name="RD_H_Middle48" position={[-23300, 0, -8950]} />
                <group
                  name="RD_H_Middle49"
                  position={[-25100, 0, -14350]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle50"
                  position={[-23300, 0, -14350]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle51"
                  position={[-26900, 0, -14350]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle53"
                  position={[-16100, 0, -14350]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle54"
                  position={[-19700, 0, -14350]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle55"
                  position={[-12500, 0, -14350]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle57"
                  position={[-8900, 0, -14350]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_V_Top_End3"
                  position={[-3500, 0, -12550]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <group name="pPlane252" />
                </group>
                <group
                  name="RD_H_Middle59"
                  position={[-23300, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle60"
                  position={[-26900, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle61"
                  position={[-17900, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle62"
                  position={[-16100, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle63"
                  position={[-19700, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle64"
                  position={[-1700, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle65"
                  position={[-3500, 0, -21550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group name="RD_H_Middle3" position={[-21500, 0, -16150]} />
                <group name="RD_H_Middle4" position={[-21500, 0, -19750]} />
                <group name="RD_H_Middle67" position={[-28700, 0, -16150]} />
                <group name="RD_H_Middle68" position={[-28700, 0, -19750]} />
                <group name="RD_H_Middle69" position={[100, 0, -17950]} />
                <group name="RD_H_Middle70" position={[100, 0, -16150]} />
                <group name="RD_H_Middle71" position={[100, 0, -19750]} />
                <group name="RD_H_Middle73" position={[-5300, 0, -16150]} />
                <group name="RD_H_Middle74" position={[-5300, 0, -19750]} />
                <group name="RD_H_Middle76" position={[-14300, 0, -16150]} />
                <group name="RD_H_Middle77" position={[-14300, 0, -19750]} />
                <group
                  name="RD_H_Middle78"
                  position={[-32300, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle79"
                  position={[-34100, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle80"
                  position={[-30500, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle81"
                  position={[-35900, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group name="RD_H_Middle82" position={[-37700, 0, -8950]} />
                <group
                  name="RD_H_Middle83"
                  position={[-35900, 0, -12550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle84"
                  position={[-34100, 0, -12550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle85"
                  position={[-32300, 0, -12550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle86"
                  position={[-30500, 0, -12550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group name="RD_H_Middle87" position={[-37700, 0, -10750]} />
                <group
                  name="RD_H_Middle88"
                  position={[3700, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle89"
                  position={[1900, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle90"
                  position={[1900, 0, -10750]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle91"
                  position={[3700, 0, -10750]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle92"
                  position={[5500, 0, -10750]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle93"
                  position={[5500, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_V_Top_End4"
                  position={[7300, 0, -7150]}
                  rotation={[0, -Math.PI / 2, 0]}
                >
                  <group name="pPlane252_1" />
                </group>
                <group
                  name="RD_V_Top_End5"
                  position={[7300, 0, -10750]}
                  rotation={[0, -Math.PI / 2, 0]}
                >
                  <group name="pPlane252_2" />
                </group>
                <group
                  name="RD_V_Top_End6"
                  position={[1900, 0, -14350]}
                  rotation={[0, -Math.PI / 2, 0]}
                >
                  <group name="pPlane252_3" />
                </group>
                <group
                  name="RD_V_Top_End7"
                  position={[-37700, 0, -5350]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <group name="pPlane252_4" />
                </group>
                <group name="RD_H_Middle95" position={[-28700, 0, -3550]} />
                <group name="RD_H_Middle98" position={[100, 0, -3550]} />
                <group name="RD_H_Middle99" position={[-21500, 0, -1750]} />
                <group name="RD_H_Middle100" position={[-28700, 0, -1750]} />
                <group name="RD_H_Middle101" position={[-14300, 0, -1750]} />
                <group name="RD_H_Middle102" position={[-7100, 0, -1750]} />
                <group name="RD_H_Middle103" position={[100, 0, -1750]} />
                <group
                  name="RD_H_Middle109"
                  position={[-26900, 0, 50]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle111"
                  position={[-23300, 0, 50]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_V_Top_End8"
                  position={[100, 0, 50]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <group name="pPlane252_5" />
                </group>
                <group
                  name="RD_H_Middle112"
                  position={[-19700, 0, -3550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle113"
                  position={[-17900, 0, -3550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle114"
                  position={[-16100, 0, -3550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle115"
                  position={[-19700, 0, 50]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle116"
                  position={[-17900, 0, 50]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle117"
                  position={[-16100, 0, 50]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_V_Top_End9"
                  position={[-7100, 0, 50]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <group name="pPlane252_6" />
                </group>
                <group
                  name="RD_H_Middle118"
                  position={[-23300, 0, -3550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group name="RD_H_Middle119" position={[-25100, 0, -1750]} />
                <group
                  name="RD_H_Middle120"
                  position={[-12500, 0, 50]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_V_Top_End10"
                  position={[-10700, 0, 50]}
                  rotation={[0, -Math.PI / 2, 0]}
                >
                  <group name="pPlane252_7" />
                </group>
                <group
                  name="RD_H_Middle121"
                  position={[-5300, 0, -3550]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group name="RD_H_Middle122" position={[-3500, 0, -5350]} />
                <group name="RD_H_Middle123" position={[-25100, 0, -19750]} />
                <group name="RD_H_Middle124" position={[-10700, 0, -19750]} />
                <group name="RD_H_Middle125" position={[-10700, 0, -16150]} />
                <group
                  name="RD_H_Middle126"
                  position={[-26900, 0, -17950]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle127"
                  position={[-19700, 0, -17949.998]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle128"
                  position={[-16100, 0, -17949.998]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle129"
                  position={[-8900, 0, -17949.998]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                  name="RD_H_Middle130"
                  position={[-7100, 0, -17949.998]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group name="RD_H_Middle131" position={[-17900, 0, -16150]} />
                <group name="group108">
                  <group name="group107">
                    <group name="GunShop1">
                      <mesh
                        name="GunShop1_FillerBuildings1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.GunShop1_FillerBuildings1_0.geometry}
                        material={materials.FillerBuildings1}
                      />
                      <mesh
                        name="GunShop1_FillerBuildings1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.GunShop1_FillerBuildings1GLOW_0.geometry
                        }
                        material={materials.FillerBuildings1GLOW}
                      />
                    </group>
                    <group name="PawnShop2">
                      <mesh
                        name="PawnShop2_Pawnshop_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.PawnShop2_Pawnshop_0.geometry}
                        material={materials.Pawnshop}
                      />
                      <mesh
                        name="PawnShop2_Pawnshop1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.PawnShop2_Pawnshop1GLOW_0.geometry}
                        material={materials.Pawnshop1GLOW}
                      />
                    </group>
                    <group name="FFactory1">
                      <mesh
                        name="FFactory1_FishFactory_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.FFactory1_FishFactory_0.geometry}
                        material={materials.FishFactory}
                      />
                      <mesh
                        name="FFactory1_FishFactory1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.FFactory1_FishFactory1GLOW_0.geometry}
                        material={materials.FishFactory1GLOW}
                      />
                    </group>
                    <group name="Laundrette1">
                      <mesh
                        name="Laundrette1_Laundrymat_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Laundrette1_Laundrymat_0.geometry}
                        material={materials.Laundrymat}
                      />
                    </group>
                    <group name="Filler">
                      <mesh
                        name="Filler_FillerBuildings1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Filler_FillerBuildings1GLOW_0.geometry}
                        material={materials.FillerBuildings1GLOW}
                      />
                      <mesh
                        name="Filler_FillerBuildings1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Filler_FillerBuildings1_0.geometry}
                        material={materials.FillerBuildings1}
                      />
                    </group>
                    <group name="Liquor1">
                      <mesh
                        name="Liquor1_FillerBuildings1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Liquor1_FillerBuildings1_0.geometry}
                        material={materials.FillerBuildings1}
                      />
                      <mesh
                        name="Liquor1_FillerBuildings1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Liquor1_FillerBuildings1GLOW_0.geometry}
                        material={materials.FillerBuildings1GLOW}
                      />
                    </group>
                    <group name="Housing1">
                      <mesh
                        name="Housing1_FillerBuildings1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Housing1_FillerBuildings1_0.geometry}
                        material={materials.FillerBuildings1}
                      />
                      <mesh
                        name="Housing1_FillerBuildings1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Housing1_FillerBuildings1GLOW_0.geometry
                        }
                        material={materials.FillerBuildings1GLOW}
                      />
                    </group>
                    <group name="group106_LM_Clinic2">
                      <mesh
                        name="group106_LM_Clinic2_Clinic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.group106_LM_Clinic2_Clinic_0.geometry}
                        material={materials.Clinic}
                      />
                    </group>
                    <group name="Project65">
                      <mesh
                        name="Project65_LMProjects_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Project65_LMProjects_0.geometry}
                        material={materials.LMProjects}
                      />
                      <mesh
                        name="Project65_LMProjects1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Project65_LMProjects1GLOW_0.geometry}
                        material={materials.LMProjects1GLOW}
                      />
                    </group>
                    <group name="Paramount9">
                      <mesh
                        name="Paramount9_Paramount_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Paramount9_Paramount_0.geometry}
                        material={materials.Paramount}
                      />
                      <mesh
                        name="Paramount9_Paramount1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Paramount9_Paramount1GLOW_0.geometry}
                        material={materials.Paramount1GLOW}
                      />
                    </group>
                    <group name="LM_Basketball12">
                      <mesh
                        name="LM_Basketball12_Basketball_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.LM_Basketball12_Basketball_0.geometry}
                        material={materials.Basketball}
                      />
                      <mesh
                        name="LM_Basketball12_RoadsGround_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.LM_Basketball12_RoadsGround_0.geometry}
                        material={materials.RoadsGround}
                      />
                      <mesh
                        name="LM_Basketball12_Laundrymat_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.LM_Basketball12_Laundrymat_0.geometry}
                        material={materials.Laundrymat}
                      />
                    </group>
                    <group name="StreetLamp18">
                      <mesh
                        name="StreetLamp18_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp18_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp18_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp18_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp19">
                      <mesh
                        name="StreetLamp19_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp19_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp19_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp19_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp20">
                      <mesh
                        name="StreetLamp20_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp20_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp20_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp20_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp21">
                      <mesh
                        name="StreetLamp21_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp21_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp21_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp21_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp22">
                      <mesh
                        name="StreetLamp22_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp22_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp22_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp22_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp23">
                      <mesh
                        name="StreetLamp23_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp23_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp23_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp23_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp24">
                      <mesh
                        name="StreetLamp24_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp24_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp24_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp24_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp25">
                      <mesh
                        name="StreetLamp25_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp25_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp25_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp25_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp26">
                      <mesh
                        name="StreetLamp26_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp26_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp26_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp26_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp27">
                      <mesh
                        name="StreetLamp27_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp27_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp27_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp27_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp28">
                      <mesh
                        name="StreetLamp28_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp28_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp28_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp28_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp29">
                      <mesh
                        name="StreetLamp29_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp29_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp29_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp29_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp30">
                      <mesh
                        name="StreetLamp30_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp30_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp30_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp30_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp31">
                      <mesh
                        name="StreetLamp31_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp31_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp31_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp31_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp32">
                      <mesh
                        name="StreetLamp32_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp32_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp32_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp32_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StreetLamp33">
                      <mesh
                        name="StreetLamp33_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp33_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StreetLamp33_WhiteGlow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.StreetLamp33_WhiteGlow_0.geometry}
                        material={materials.WhiteGlow}
                      />
                    </group>
                    <group name="StopLights6_StopLight5_polySurface260">
                      <mesh
                        name="StopLights6_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights6_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights6_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights6_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights6_StopLight8_polySurface260">
                      <mesh
                        name="StopLights6_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights6_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights6_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights6_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights6_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights6_StopLight6_polySurface260">
                      <mesh
                        name="StopLights6_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights6_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights6_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights6_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights6_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights6_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights1_StopLight6_polySurface260">
                      <mesh
                        name="StopLights1_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights1_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights1_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights1_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights1_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights1_StopLight5_polySurface260">
                      <mesh
                        name="StopLights1_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights1_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights1_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights1_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights1_StopLight8_polySurface260">
                      <mesh
                        name="StopLights1_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights1_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights1_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights1_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights1_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights1_StopLight7_polySurface260">
                      <mesh
                        name="StopLights1_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights1_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights1_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights1_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights1_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights4_StopLight7_polySurface260">
                      <mesh
                        name="StopLights4_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights4_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights4_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights4_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights4_StopLight6_polySurface260">
                      <mesh
                        name="StopLights4_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights4_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights4_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights4_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights4_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights4_StopLight8_polySurface260">
                      <mesh
                        name="StopLights4_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights4_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights4_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights4_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights4_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights4_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights5_StopLight5_polySurface260">
                      <mesh
                        name="StopLights5_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights5_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights5_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights5_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights5_StopLight7_polySurface260">
                      <mesh
                        name="StopLights5_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights5_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights5_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights5_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights5_StopLight8_polySurface260">
                      <mesh
                        name="StopLights5_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights5_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights5_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights5_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights5_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights5_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights_StopLight6_polySurface260">
                      <mesh
                        name="StopLights_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights_StopLight5_polySurface260">
                      <mesh
                        name="StopLights_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights_StopLight8_polySurface260">
                      <mesh
                        name="StopLights_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights_StopLight7_polySurface260">
                      <mesh
                        name="StopLights_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights3_StopLight6_polySurface260">
                      <mesh
                        name="StopLights3_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights3_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights3_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights3_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights3_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights3_StopLight5_polySurface260">
                      <mesh
                        name="StopLights3_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights3_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights3_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights3_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights3_StopLight8_polySurface260">
                      <mesh
                        name="StopLights3_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights3_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights3_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights3_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights3_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights3_StopLight7_polySurface260">
                      <mesh
                        name="StopLights3_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights3_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights3_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights3_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights3_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights2_StopLight5_polySurface260">
                      <mesh
                        name="StopLights2_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights2_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights2_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights2_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights2_StopLight6_polySurface260">
                      <mesh
                        name="StopLights2_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights2_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights2_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights2_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights2_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights2_StopLight8_polySurface260">
                      <mesh
                        name="StopLights2_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights2_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights2_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights2_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights2_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights2_StopLight7_polySurface260">
                      <mesh
                        name="StopLights2_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights2_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights2_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights2_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights2_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights13_StopLight6_polySurface260">
                      <mesh
                        name="StopLights13_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights13_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights13_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights13_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights13_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights13_StopLight5_polySurface260">
                      <mesh
                        name="StopLights13_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights13_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights13_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights13_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights13_StopLight8_polySurface260">
                      <mesh
                        name="StopLights13_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights13_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights13_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights13_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights13_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights13_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights8_StopLight6_polySurface260">
                      <mesh
                        name="StopLights8_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights8_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights8_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights8_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights8_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights8_StopLight5_polySurface260">
                      <mesh
                        name="StopLights8_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights8_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights8_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights8_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights8_StopLight7_polySurface260">
                      <mesh
                        name="StopLights8_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights8_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights8_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights8_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights8_StopLight8_polySurface260">
                      <mesh
                        name="StopLights8_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights8_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights8_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights8_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights8_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights8_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights11_StopLight6_polySurface260">
                      <mesh
                        name="StopLights11_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights11_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights11_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights11_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights11_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights11_StopLight7_polySurface260">
                      <mesh
                        name="StopLights11_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights11_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights11_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights11_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights12_StopLight5_polySurface260">
                      <mesh
                        name="StopLights12_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights12_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights12_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights12_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights11_StopLight8_polySurface260">
                      <mesh
                        name="StopLights11_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights11_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights11_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights11_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights11_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights11_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights12_StopLight8_polySurface260">
                      <mesh
                        name="StopLights12_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights12_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights12_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights12_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights12_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights12_StopLight7_polySurface260">
                      <mesh
                        name="StopLights12_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights12_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights12_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights12_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights12_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights10_StopLight7_polySurface260">
                      <mesh
                        name="StopLights10_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights10_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights10_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights10_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights10_StopLight6_polySurface260">
                      <mesh
                        name="StopLights10_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights10_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights10_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights10_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights10_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights10_StopLight8_polySurface260">
                      <mesh
                        name="StopLights10_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights10_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights10_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights10_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights10_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights10_StopLight5_polySurface260">
                      <mesh
                        name="StopLights10_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights10_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights10_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights10_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights10_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights7_StopLight6_polySurface260">
                      <mesh
                        name="StopLights7_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights7_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights7_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights7_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights7_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights7_StopLight5_polySurface260">
                      <mesh
                        name="StopLights7_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights7_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights7_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights7_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights7_StopLight7_polySurface260">
                      <mesh
                        name="StopLights7_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights7_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights7_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights7_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights7_StopLight8_polySurface260">
                      <mesh
                        name="StopLights7_StopLight8_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight8_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights7_StopLight8_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight8_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights7_StopLight8_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights7_StopLight8_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights7_StopLight8_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights7_StopLight8_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights9_StopLight6_polySurface260">
                      <mesh
                        name="StopLights9_StopLight6_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight6_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights9_StopLight6_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight6_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights9_StopLight6_polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.StopLights9_StopLight6_polySurface260_RedGLOW_0
                            .geometry
                        }
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="StopLights9_StopLight6_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight6_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights9_StopLight5_polySurface260">
                      <mesh
                        name="StopLights9_StopLight5_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight5_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights9_StopLight5_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight5_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights9_StopLight5_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight5_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights9_StopLight5_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight5_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="StopLights9_StopLight7_polySurface260">
                      <mesh
                        name="StopLights9_StopLight7_polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight7_polySurface260_CityProps_0
                            .geometry
                        }
                        material={materials.CityProps}
                      />
                      <mesh
                        name="StopLights9_StopLight7_polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight7_polySurface260_CityProps1GLOW_0
                            .geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="StopLights9_StopLight7_polySurface260_GreenGlow_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight7_polySurface260_GreenGlow_0
                            .geometry
                        }
                        material={materials.GreenGlow}
                      />
                      <mesh
                        name="StopLights9_StopLight7_polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .StopLights9_StopLight7_polySurface260_WhiteGlow1_0
                            .geometry
                        }
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="polySurface260">
                      <mesh
                        name="polySurface260_CityProps_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface260_CityProps_0.geometry}
                        material={materials.CityProps}
                      />
                      <mesh
                        name="polySurface260_CityProps1GLOW_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.polySurface260_CityProps1GLOW_0.geometry
                        }
                        material={materials.CityProps1GLOW}
                      />
                      <mesh
                        name="polySurface260_RedGLOW_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface260_RedGLOW_0.geometry}
                        material={materials.RedGLOW}
                      />
                      <mesh
                        name="polySurface260_WhiteGlow1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface260_WhiteGlow1_0.geometry}
                        material={materials.WhiteGlow1}
                      />
                    </group>
                    <group name="LM_Basketball13" position={[32018.018, 0, 0]}>
                      <mesh
                        name="LM_Basketball13_Basketball_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.LM_Basketball13_Basketball_0.geometry}
                        material={materials.Basketball}
                      />
                      <mesh
                        name="LM_Basketball13_RoadsGround_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.LM_Basketball13_RoadsGround_0.geometry}
                        material={materials.RoadsGround}
                      />
                      <mesh
                        name="LM_Basketball13_Laundrymat_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.LM_Basketball13_Laundrymat_0.geometry}
                        material={materials.Laundrymat}
                      />
                    </group>
                  </group>
                  <group name="group">
                    <group name="pasted__group107">
                      <group
                        name="pasted__Pinetree1"
                        position={[-15359.607, 1.612, 2733.057]}
                        scale={30.95}
                      >
                        <group name="Temp1Just_PineTreePTTreeTrunk">
                          <mesh
                            name="Temp1Just_PineTreePTTreeTrunk_Temp1PineTreeTrunk_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .Temp1Just_PineTreePTTreeTrunk_Temp1PineTreeTrunk_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="Temp1Just_PineTreePTBranches">
                          <mesh
                            name="Temp1Just_PineTreePTBranches_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .Temp1Just_PineTreePTBranches_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="Temp1Just_PineTreePTFlatLeaves"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="Temp1Just_PineTreePTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .Temp1Just_PineTreePTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="Temp1Just_PineTreePTLeafClumps"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="Temp1Just_PineTreePTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .Temp1Just_PineTreePTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree2"
                        position={[-15197.182, 1.612, 3283.925]}
                        rotation={[0, -1.299, 0]}
                        scale={39.061}
                      >
                        <group name="pasted__PTTreeTrunk">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree3"
                        position={[-14629.211, 1.612, 2862.277]}
                        rotation={[0, 0.462, 0]}
                        scale={39.061}
                      >
                        <group name="pasted__PTTreeTrunk_1">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_1">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTLeafClumps"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTFlatLeaves"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree4"
                        position={[-20771.254, 1.612, 2889.347]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={34.176}
                      >
                        <group name="pasted__PTTreeTrunk_2">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_2">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree5"
                        position={[-19845.986, 1.612, 2733.057]}
                        scale={27.079}
                      >
                        <group name="pasted__PTTreeTrunk_3">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_3">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTFlatLeaves"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTLeafClumps"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree6"
                        position={[-21236.469, 1.612, 3123.136]}
                        rotation={[0, -1.299, 0]}
                        scale={34.176}
                      >
                        <group name="pasted__PTTreeTrunk_4">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_4">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree7"
                        position={[16096.229, 1.612, 2733.057]}
                        scale={30.95}
                      >
                        <group name="pasted__PTTreeTrunk_5">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_5">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree7_PTFlatLeaves"
                          position={[-387.023, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__Pinetree7_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree7_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree7_PTLeafClumps"
                          position={[-387.023, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__Pinetree7_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree7_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree8"
                        position={[16258.656, 1.612, 3283.925]}
                        rotation={[0, -1.299, 0]}
                        scale={39.061}
                      >
                        <group name="pasted__PTTreeTrunk_6">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_6">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree8_PTLeafClumps"
                          position={[-143.551, -0.031, 281.522]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree8_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree8_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree8_PTFlatLeaves"
                          position={[-143.551, -0.031, 281.522]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree8_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree8_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree9"
                        position={[16826.625, 1.612, 2862.277]}
                        rotation={[0, 0.462, 0]}
                        scale={39.061}
                      >
                        <group name="pasted__PTTreeTrunk_7">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_7">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree9_PTLeafClumps"
                          position={[-262.569, -0.031, -191.83]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree9_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree9_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree9_PTFlatLeaves"
                          position={[-262.569, -0.031, -191.83]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree9_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree9_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree10"
                        position={[11246.765, 1.612, 2889.347]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={34.176}
                      >
                        <group name="pasted__PTTreeTrunk_8">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_8">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree10_PTFlatLeaves"
                          position={[184.01, -0.035, -173.412]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree10_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree10_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree10_PTLeafClumps"
                          position={[184.01, -0.035, -173.412]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree10_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree10_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree11"
                        position={[12172.032, 1.612, 2733.057]}
                        scale={27.079}
                      >
                        <group name="pasted__PTTreeTrunk_9">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_9">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree11_PTLeafClumps"
                          position={[-334.499, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree11_PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree11_PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree11_PTFlatLeaves"
                          position={[-334.499, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree11_PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree11_PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree12"
                        position={[10781.549, 1.612, 3123.136]}
                        rotation={[0, -1.299, 0]}
                        scale={34.176}
                      >
                        <group name="pasted__PTTreeTrunk_10">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_10">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves"
                          position={[-128.627, -0.035, 207.831]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps"
                          position={[-128.627, -0.035, 207.831]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree13"
                        position={[-17108.275, 1.612, 3654.983]}
                        scale={33.408}
                      >
                        <group name="pasted__PTTreeTrunk_11">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_11">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTFlatLeaves_1"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTLeafClumps_1"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree14"
                        position={[-16977.17, 1.612, 3260.149]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={34.176}
                      >
                        <group name="pasted__PTTreeTrunk_12">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_12">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_1"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_1"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree15"
                        position={[-17442.385, 1.612, 3493.938]}
                        rotation={[0, -1.299, 0]}
                        scale={34.176}
                      >
                        <group name="pasted__PTTreeTrunk_13">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_13"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_13
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_13">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_13"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_13
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_1"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_1"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree16"
                        position={[-19565.896, 1.612, 2851.97]}
                        rotation={[0, -1.299, 0]}
                        scale={34.176}
                      >
                        <group name="pasted__PTTreeTrunk_14">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_14"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_14
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_14">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_14"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_14
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_2"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_2"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree17"
                        position={[-3746.79, 1.612, 3260.149]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_15">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_15"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_15
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_15">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_15"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_15
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_2"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_2"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree18"
                        position={[-4212.006, 1.612, 3493.938]}
                        rotation={[0, -1.299, 0]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_16">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_16"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_16
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_16">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_16"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_16
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_3"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_3"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree19"
                        position={[-5070.802, 1.612, 4296.702]}
                        scale={54.618}
                      >
                        <group name="pasted__PTTreeTrunk_17">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_17"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_17
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_17">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_17"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_17
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTFlatLeaves_2"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTLeafClumps_2"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree20"
                        position={[-914.134, 1.612, 4720.114]}
                        scale={62.425}
                      >
                        <group name="pasted__PTTreeTrunk_18">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_18"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_18
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_18">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_18"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_18
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_1"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_1"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree21"
                        position={[-1966.802, 1.612, 3283.925]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_19">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_19"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_19
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_19">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_19"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_19
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_1"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_1"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree22"
                        position={[-1398.832, 1.612, 2862.277]}
                        rotation={[0, 0.462, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_20">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_20"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_20
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_20">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_20"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_20
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTLeafClumps_1"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTFlatLeaves_1"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_1
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree23"
                        position={[-2722.305, 1.612, 4311.868]}
                        scale={63.906}
                      >
                        <group name="pasted__PTTreeTrunk_21">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_21"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_21
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_21">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_21"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_21
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_2"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_2"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree24"
                        position={[-1664.287, 1.612, 3885.493]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_22">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_22"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_22
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_22">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_22"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_22
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_2"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_2"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree25"
                        position={[-2449.362, 1.612, -808.581]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_23">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_23"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_23
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_23">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_23"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_23
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_3"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_3"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree26"
                        position={[-2891.638, 1.612, -2405.514]}
                        rotation={[0, -1.299, 0]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_24">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_24"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_24
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_24">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_24"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_24
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_4"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_4"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree27"
                        position={[-1539.379, 1.612, -4614.132]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_25">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_25"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_25
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_25">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_25"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_25
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_3"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_3"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree28"
                        position={[-971.409, 1.612, -3528.628]}
                        rotation={[0, 0.462, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_26">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_26"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_26
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_26">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_26"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_26
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTLeafClumps_2"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTFlatLeaves_2"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_2
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree29"
                        position={[-2294.883, 1.612, -2985.881]}
                        scale={73.625}
                      >
                        <group name="pasted__PTTreeTrunk_27">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_27"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_27
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_27">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_27"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_27
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_3"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_3"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree30"
                        position={[-2620.729, 1.612, -5418.307]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_28">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_28"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_28
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_28">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_28"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_28
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_4"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_4"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree31"
                        position={[-2318.214, 1.612, -3900.468]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_29">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_29"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_29
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_29">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_29"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_29
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_5"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_5"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree32"
                        position={[-3376.232, 1.612, -3474.093]}
                        scale={63.906}
                      >
                        <group name="pasted__PTTreeTrunk_30">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_30"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_30
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_30">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_30"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_30
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_4"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_4"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree33"
                        position={[-252.828, 1.612, -2874.385]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_31">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_31"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_31
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_31">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_31"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_31
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_6"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_6"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree34"
                        position={[-1109.209, 1.612, -1746.152]}
                        scale={54.618}
                      >
                        <group name="pasted__PTTreeTrunk_32">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_32"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_32
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_32">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_32"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_32
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTFlatLeaves_3"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTLeafClumps_3"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree35"
                        position={[-1205.905, 1.612, -2548.916]}
                        rotation={[0, -1.299, 0]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_33">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_33"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_33
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_33">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_33"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_33
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_5"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_5"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree36"
                        position={[-4212.006, 1.612, -654.98]}
                        rotation={[0, -1.299, 0]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_34">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_34"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_34
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_34">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_34"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_34
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_6"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_6"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree37"
                        position={[175.162, 1.612, 5143.4]}
                        scale={53.228}
                      >
                        <group name="pasted__PTTreeTrunk_35">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_35"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_35
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_35">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_35"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_35
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_5"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_5"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree38"
                        position={[930.666, 1.612, 4115.457]}
                        rotation={[0, -1.299, 0]}
                        scale={48.769}
                      >
                        <group name="pasted__PTTreeTrunk_36">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_36"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_36
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_36">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_36"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_36
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_7"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_7"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree39"
                        position={[1983.333, 1.612, 5551.646]}
                        scale={51.994}
                      >
                        <group name="pasted__PTTreeTrunk_37">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_37"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_37
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_37">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_37"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_37
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_6"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_6"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree40"
                        position={[-4212.006, 1.612, -4023.406]}
                        rotation={[0, -1.299, 0]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_38">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_38"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_38
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_38">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_38"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_38
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_7"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_7"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree41"
                        position={[-3746.79, 1.612, -2481.917]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_39">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_39"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_39
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_39">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_39"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_39
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_4"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_4"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree42"
                        position={[-4115.309, 1.612, -1445.364]}
                        scale={54.618}
                      >
                        <group name="pasted__PTTreeTrunk_40">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_40"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_40
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_40">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_40"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_40
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTFlatLeaves_4"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTLeafClumps_4"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree43"
                        position={[-2746.319, 1.612, 3592.812]}
                        scale={73.625}
                      >
                        <group name="pasted__PTTreeTrunk_41">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_41"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_41
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_41">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_41"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_41
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_7"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_7"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree44"
                        position={[-2449.362, 1.612, 2312.902]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_42">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_42"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_42
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_42">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_42"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_42
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_5"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_5"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree45"
                        position={[-3126.144, 1.612, 2546.691]}
                        rotation={[0, -1.299, 0]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_43">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_43"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_43
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_43">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_43"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_43
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_8"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_8"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree46"
                        position={[-3376.232, 1.612, 1403.669]}
                        scale={63.906}
                      >
                        <group name="pasted__PTTreeTrunk_44">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_44"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_44
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_44">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_44"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_44
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_8"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_8"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree47"
                        position={[-252.828, 1.612, -5533.392]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_45">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_45"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_45
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_45">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_45"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_45
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_8"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_8"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree48"
                        position={[-2449.362, 1.612, 5411.416]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_46">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_46"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_46
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_46">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_46"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_46
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_6"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_6"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree49"
                        position={[-3126.144, 1.612, 5645.206]}
                        rotation={[0, -1.299, 0]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_47">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_47"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_47
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_47">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_47"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_47
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_9"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_9"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree50"
                        position={[-1398.832, 1.612, 5960.791]}
                        rotation={[0, 0.462, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_48">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_48"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_48
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_48">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_48"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_48
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTLeafClumps_3"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTFlatLeaves_3"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_3
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree51"
                        position={[16570.543, 1.612, 5415.424]}
                        rotation={[0, -1.299, 0]}
                        scale={51.593}
                      >
                        <group name="pasted__PTTreeTrunk_49">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_49"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_49
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_49">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_49"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_49
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_10"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_10"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree52"
                        position={[17247.324, 1.612, 5181.635]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={51.593}
                      >
                        <group name="pasted__PTTreeTrunk_50">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_50"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_50
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_50">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_50"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_50
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_7"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_7"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree53"
                        position={[15581.378, 1.612, 4544.853]}
                        scale={43.681}
                      >
                        <group name="pasted__PTTreeTrunk_51">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_51"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_51
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_51">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_51"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_51
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTFlatLeaves_5"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTLeafClumps_5"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree54"
                        position={[15484.682, 1.612, 5335.237]}
                        rotation={[0, -1.299, 0]}
                        scale={40.971}
                      >
                        <group name="pasted__PTTreeTrunk_52">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_52"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_52
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_52">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_52"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_52
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_11"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_11"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree55"
                        position={[-4865.165, 1.612, -4719.866]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_53">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_53"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_53
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_53">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_53"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_53
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_9"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_9"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree56"
                        position={[26143.1, 1.612, 4923.819]}
                        scale={41.413}
                      >
                        <group name="pasted__PTTreeTrunk_54">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_54"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_54
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_54">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_54"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_54
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTFlatLeaves_6"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTLeafClumps_6"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree57"
                        position={[28888.689, 1.612, 5645.206]}
                        rotation={[0, -1.299, 0]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_55">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_55"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_55
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_55">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_55"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_55
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_12"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_12"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree58"
                        position={[27802.826, 1.612, 3493.938]}
                        rotation={[0, -1.299, 0]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_56">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_56"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_56
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_56">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_56"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_56
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_13"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_13"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_13
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_13"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_13"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_13
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree59"
                        position={[28268.043, 1.612, 3260.149]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_57">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_57"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_57
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_57">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_57"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_57
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_8"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_8"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree60"
                        position={[28888.689, 1.612, 2546.691]}
                        rotation={[0, -1.299, 0]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_58">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_58"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_58
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_58">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_58"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_58
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_14"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_14"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_14
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_14"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_14"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_14
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree61"
                        position={[29565.471, 1.612, 2312.902]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_59">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_59"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_59
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_59">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_59"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_59
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_9"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_9"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree62"
                        position={[29292.527, 1.612, 4311.868]}
                        scale={63.906}
                      >
                        <group name="pasted__PTTreeTrunk_60">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_60"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_60
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_60">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_60"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_60
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_9"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_9"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTLeafClumps_Temp1PineTreeLeaves_0_9
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree63"
                        position={[29565.471, 1.612, 5411.416]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_61">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_61"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_61
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_61">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_61"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_61
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_10"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_10"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree64"
                        position={[30616, 1.612, 5960.791]}
                        rotation={[0, 0.462, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_62">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_62"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_62
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_62">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_62"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_62
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTLeafClumps_4"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTFlatLeaves_4"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_4
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree65"
                        position={[31443.553, 1.612, 4720.114]}
                        scale={62.425}
                      >
                        <group name="pasted__PTTreeTrunk_63">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_63"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_63
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_63">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_63"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_63
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_10"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_10"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__PTLeafClumps_Temp1PineTreeLeaves_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree66"
                        position={[30350.545, 1.612, 3885.493]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_64">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_64"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_64
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_64">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_64"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_64
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_10"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_10"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_10
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree67"
                        position={[30048.031, 1.612, 3283.925]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_65">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_65"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_65
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_65">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_65"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_65
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_11"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_11"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree68"
                        position={[30616, 1.612, 2862.277]}
                        rotation={[0, 0.462, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_66">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_66"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_66
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_66">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_66"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_66
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTLeafClumps_5"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTFlatLeaves_5"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_5
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree69"
                        position={[29565.471, 1.612, -2121.687]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={64.512}
                      >
                        <group name="pasted__PTTreeTrunk_67">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_67"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_67
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_67">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_67"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_67
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_11"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_11"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree70"
                        position={[29719.949, 1.612, -4298.987]}
                        scale={73.625}
                      >
                        <group name="pasted__PTTreeTrunk_68">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_68"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_68
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_68">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_68"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_68
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_11"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_11"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__PTLeafClumps_Temp1PineTreeLeaves_0_11
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree71"
                        position={[27802.826, 1.612, -654.98]}
                        rotation={[0, -1.299, 0]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_69">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_69"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_69
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_69">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_69"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_69
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_15"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_15"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_15
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_15"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_15"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_15
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree72"
                        position={[27899.523, 1.612, -1445.364]}
                        scale={54.618}
                      >
                        <group name="pasted__PTTreeTrunk_70">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_70"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_70
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_70">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_70"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_70
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTFlatLeaves_7"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTLeafClumps_7"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree73"
                        position={[28268.043, 1.612, -3795.022]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_71">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_71"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_71
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_71">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_71"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_71
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_12"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_12"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree74"
                        position={[27802.826, 1.612, -5336.512]}
                        rotation={[0, -1.299, 0]}
                        scale={51.23}
                      >
                        <group name="pasted__PTTreeTrunk_72">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_72"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_72
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_72">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_72"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_72
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTFlatLeaves_16"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_16"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTFlatLeaves_Temp1PineTreeLeaves_0_16
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree6_PTLeafClumps_16"
                          position={[58.841, -0.035, -463.671]}
                          rotation={[0, 1.299, 0]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_16"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree6_PTLeafClumps_Temp1PineTreeLeaves_0_16
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree75"
                        position={[27149.668, 1.612, -6032.972]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_73">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_73"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_73
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_73">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_73"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_73
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_12"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_12"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree76"
                        position={[30905.623, 1.612, -602.112]}
                        scale={54.618}
                      >
                        <group name="pasted__PTTreeTrunk_74">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_74"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_74
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_74">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_74"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_74
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTFlatLeaves_8"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTFlatLeaves_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree5_PTLeafClumps_8"
                          position={[545.386, -0.044, -75.107]}
                          scale={0.027}
                        >
                          <mesh
                            name="pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree5_PTLeafClumps_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree77"
                        position={[31043.424, 1.612, -4841.733]}
                        rotation={[0, 0.462, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_75">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_75"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_75
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_75">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_75"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_75
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTLeafClumps_6"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTFlatLeaves_6"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_6
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree78"
                        position={[29696.619, 1.612, -5213.573]}
                        rotation={[0, -1.299, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_76">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_76"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_76
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_76">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_76"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_76
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_13"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_13"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_13
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_13"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_13"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_13
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree79"
                        position={[-28466.486, 1.612, -5976.291]}
                        rotation={[0, -1.299, 0]}
                        scale={45.343}
                      >
                        <group name="pasted__PTTreeTrunk_77">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_77"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_77
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_77">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_77"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_77
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_14"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_14"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_14
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_14"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_14"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_14
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree80"
                        position={[-29559.789, 1.612, -4675.77]}
                        rotation={[0, 0.462, 0]}
                        scale={58.552}
                      >
                        <group name="pasted__PTTreeTrunk_78">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_78"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_78
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_78">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_78"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_78
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTLeafClumps_7"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTFlatLeaves_7"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_7
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree81"
                        position={[-30361.658, 1.612, -4614.132]}
                        rotation={[0, -1.299, 0]}
                        scale={45.343}
                      >
                        <group name="pasted__PTTreeTrunk_79">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_79"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_79
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_79">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_79"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_79
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_15"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_15"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_15
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_15"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_15"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_15
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree82"
                        position={[-31197.486, 1.612, 5143.4]}
                        scale={53.228}
                      >
                        <group name="pasted__PTTreeTrunk_80">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_80"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_80
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_80">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_80"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_80
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTFlatLeaves_12"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__PTFlatLeaves_Temp1PineTreeLeaves_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__PTLeafClumps_12"
                          position={[382.828, -0.039, -65.714]}
                          scale={0.024}
                        >
                          <mesh
                            name="pasted__PTLeafClumps_Temp1PineTreeLeaves_0_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__PTLeafClumps_Temp1PineTreeLeaves_0_12
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree83"
                        position={[-31191.414, 1.612, 5710.042]}
                        rotation={[0, 0.462, 0]}
                        scale={47.245}
                      >
                        <group name="pasted__PTTreeTrunk_81">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_81"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_81
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_81">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_81"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_81
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTLeafClumps_8"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTLeafClumps_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree3_PTFlatLeaves_8"
                          position={[283.347, -0.031, 80.325]}
                          rotation={[0, -0.462, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree3_PTFlatLeaves_Temp1PineTreeLeaves_0_8
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree84"
                        position={[-31589.262, 1.612, 5411.416]}
                        rotation={[-Math.PI, 1.007, -Math.PI]}
                        scale={52.054}
                      >
                        <group name="pasted__PTTreeTrunk_82">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_82"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_82
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_82">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_82"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_82
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTLeafClumps_13"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_13"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTLeafClumps_Temp1PineTreeLeaves_0_13
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree4_PTFlatLeaves_13"
                          position={[-188.431, -0.035, 415.95]}
                          rotation={[-Math.PI, -1.007, -Math.PI]}
                          scale={0.022}
                        >
                          <mesh
                            name="pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_13"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree4_PTFlatLeaves_Temp1PineTreeLeaves_0_13
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                      <group
                        name="pasted__Pinetree85"
                        position={[-30804.188, 1.612, 4121.49]}
                        rotation={[0, -1.299, 0]}
                        scale={47.245}
                      >
                        <group name="pasted__PTTreeTrunk_83">
                          <mesh
                            name="pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_83"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTTreeTrunk_Temp1PineTreeTrunk_0_83
                                .geometry
                            }
                            material={materials.Temp1PineTreeTrunk}
                          />
                        </group>
                        <group name="pasted__PTBranches_83">
                          <mesh
                            name="pasted__PTBranches_Temp1PineTreeLeaves_0_83"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.pasted__PTBranches_Temp1PineTreeLeaves_0_83
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTLeafClumps_16"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_16"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTLeafClumps_Temp1PineTreeLeaves_0_16
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                        <group
                          name="pasted__Pinetree2_PTFlatLeaves_16"
                          position={[20.473, -0.031, -306.006]}
                          rotation={[0, 1.299, 0]}
                          scale={0.019}
                        >
                          <mesh
                            name="pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_16"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .pasted__Pinetree2_PTFlatLeaves_Temp1PineTreeLeaves_0_16
                                .geometry
                            }
                            material={materials.Temp1PineTreeLeaves}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/space_loop_city.glb");
