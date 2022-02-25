const EndTurn = () => {
  return (
    <div style={styles.container}>
      <button style={styles.endTurn}>End Turn</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  endTurn: {
    backgroundColor: "#FFAC00",
    textShadow: "2px 4px #8E6F6F",
    color: "white",
    fontWeight: "700",
    fontSize: "40px",
    border: "6px solid #5D330B",
    borderRadius: "10px",
    padding: "5px 150px",
    cursor: "pointer",
    margin: "30px 0px",
    "&:hover": {
      backgroundColor: "#efefef",
      color: "red",
    },
  },
};

export default EndTurn;
