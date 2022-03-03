import { useSelector } from "react-redux";

export const EnergyCount = () => {
  const { energy } = useSelector((state) => state.energyStore);

  return (
    <div style={styles.energyContainer}>
      <div style={styles.energyBox}>
        {energy}/<span style={styles.maxEnergy}>10</span>
      </div>
    </div>
  );
};

const styles = {
  energyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  energyBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    backgroundColor: "#E38711",
    color: "white",
    textShadow: "3px 4px #8E6F6F",
    fontWeight: "700",
    fontSize: "45px",
    border: "6px solid #5D330B",
    borderRadius: "50%",
    margin: "10px 0px",
    cursor: "pointer",
  },
  maxEnergy: {
    fontSize: "30px",
    fontWeight: "400",
    textShadow: "2px 3px #8E6F6F",
  },
};
