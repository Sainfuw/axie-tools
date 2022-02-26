import { useSelector } from "react-redux";

const EnergyCount = () => {
  const { energy } = useSelector((state) => state.energyStore);

  return (
    <div style={styles.energyContainer}>
      <div style={styles.energyBox}>{energy}/10</div>
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
    display: "inline",
    backgroundColor: "#E38711",
    color: "white",
    textShadow: "3px 4px #8E6F6F",
    fontWeight: "700",
    fontSize: "50px",
    border: "6px solid #5D330B",
    borderRadius: "50%",
    padding: "35px 15px",
    margin: "10px 0px",
    cursor: "pointer",
  },
};

export default EnergyCount;
