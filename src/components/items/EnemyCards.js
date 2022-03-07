import { EnemyCard } from "./EnemyCard";
import getColor from "../../helpers/getColor";

export const EnemyCards = ({ enemy }) => {
  return (
    <div
      style={{ ...styles.container, backgroundColor: getColor(enemy.class) }}
    >
      <EnemyCard part={enemy.parts[3]} />
      <EnemyCard part={enemy.parts[4]} />
      <EnemyCard part={enemy.parts[2]} />
      <EnemyCard part={enemy.parts[5]} />
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
    height: "270px",
  },
};
