export const EnemyCard = ({ part }) => {
  return (
    <div style={styles.container}>
      <button
        style={{
          ...styles.button,
          ...styles.buttonImage,
          backgroundImage: `url(${part.abilities[0].backgroundUrl})`,
        }}
      ></button>
      <button style={{ ...styles.button, ...styles.textButton }}>0</button>
    </div>
  );
};

const styles = {
  container: {
    width: "200px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2px 0",
  },
  button: {
    width: "60px",
    height: "60px",
    margin: "0 2px",
    cursor: "pointer",
    border: "4px solid #5D330B",
    borderRadius: "6px",
  },
  buttonImage: {
    backgroundPosition: "55% 30%",
    backgroundSize: "80px 115px",
    overflow: "hidden",
  },
  textButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DB4647",
    color: "white",
    fontWeight: "700",
    fontSize: "35px",
  },
};
