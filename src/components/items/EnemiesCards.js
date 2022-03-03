import { useSelector } from "react-redux";
import { EnemyCards } from "./EnemyCards";
import { NoEnemies } from "./NoEnemies";

export const EnemiesCards = () => {
  const { enemyOne, enemyTwo, enemyThree } = useSelector(
    (state) => state.enemiesStore
  );

  const needFill = () =>
    Object.keys(enemyTwo).length === 0 && Object.keys(enemyThree).length === 0;

  if (needFill && Object.keys(enemyOne).length === 0) {
    return <NoEnemies />;
  }

  return (
    <div style={styles.container}>
      {needFill ? (
        <div style={styles.cardsContainer}>
          <EnemyCards enemy={enemyOne} />
          {console.log("showModal")}
        </div>
      ) : (
        <div style={styles.cardsContainer}>
          <EnemyCards enemy={enemyOne} />
          <EnemyCards color="Mech" parts={{}} />
          <EnemyCards color="Bird" parts={{}} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "510px",
    marginTop: "20px",
    border: "6px solid #5D330B",
    borderRadius: "10px",
  },
};
