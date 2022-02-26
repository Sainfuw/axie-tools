import { useState } from "react";

import RestartGame from "./RestartGame";
import EnergyGained from "./EnergyGained";
import EnergyDestroyed from "./EnergyDestroyed";
import EndTurn from "./EndTurn";

const EnergyVariants = () => {
  const [energyGained, setEnergyGained] = useState(0);
  const [energyDestroyed, setEnergyDestroyed] = useState(0);

  const restartEnergies = () => {
    setEnergyGained(0);
    setEnergyDestroyed(0);
  };

  return (
    <>
      <RestartGame restartEnergies={restartEnergies} />
      <div style={styles.container}>
        <EnergyGained
          energyGained={energyGained}
          setEnergyGained={setEnergyGained}
        />
        <EnergyDestroyed
          energyDestroyed={energyDestroyed}
          setEnergyDestroyed={setEnergyDestroyed}
        />
      </div>
      <EndTurn restartEnergies={restartEnergies} />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
};

export default EnergyVariants;
