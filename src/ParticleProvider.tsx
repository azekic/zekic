import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particleOptions } from "./particleOptions";
import { Box } from "@chakra-ui/react";

export function ParticleProvider() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  if (init)
    return (
      <Box position="relative" zIndex={-1}>
        <Particles options={particleOptions} style={{ zIndex: -1 }} />
      </Box>
    );
  return <></>;
}
