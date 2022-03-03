export const NoEnemies = () => {
  return (
    <div style={styles.container}>
      <p>No Enemies Selected.</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  },
};
