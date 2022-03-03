import getColor from "../../helpers/getColor";

export const EnemyCards = ({ enemy }) => {
  return (
    <div
      style={{ ...styles.container, backgroundColor: getColor(enemy.class) }}
    >
      <p>card1</p>
      <p>card2</p>
      <p>card3</p>
      <p>card4</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "170px",
    height: "300px",
  },
};
