import { useState } from "react";
import { EnemyCard } from "./EnemyCard";
import getColor from "../../helpers/getColor";

export const EnemyCards = ({ enemy }) => {
  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(0);
  const [card3, setCard3] = useState(0);
  const [card4, setCard4] = useState(0);

  if (Object.keys(enemy).length === 0) {
    return <></>;
  }

  return (
    <div
      style={{ ...styles.container, backgroundColor: getColor(enemy.class) }}
    >
      <EnemyCard part={enemy.parts[3]} usedCard={card1} setCard={setCard1} />
      <EnemyCard part={enemy.parts[4]} usedCard={card2} setCard={setCard2} />
      <EnemyCard part={enemy.parts[2]} usedCard={card3} setCard={setCard3} />
      <EnemyCard part={enemy.parts[5]} usedCard={card4} setCard={setCard4} />
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
