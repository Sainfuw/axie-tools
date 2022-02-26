import EnergyGained from "./EnergyGained";
import EnergyDestroyed from "./EnergyDestroyed";

const EnergyVariants = () => {
  return (
    <div style={styles.container}>
      <EnergyGained />
      <EnergyDestroyed />
    </div>
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
