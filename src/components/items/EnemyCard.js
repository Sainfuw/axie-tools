import { useDispatch } from "react-redux";
import { addEnergy, removeEnergy } from "../../actions/energyActions";

export const EnemyCard = ({ part, usedCard, setCard }) => {
  const dispatch = useDispatch();

  const handlePlus = () => {
    const [ability] = part.abilities;
    if (ability.energy > 0) {
      setCard((card) => card + ability.energy);
      dispatch(removeEnergy(ability.energy));
    }
  };

  const handleLess = () => {
    const [ability] = part.abilities;
    if (ability.energy > 0 && usedCard > 0) {
      setCard((card) => card - ability.energy);
      dispatch(addEnergy(ability.energy));
    }
  };

  return (
    <div style={styles.container}>
      <button
        style={{
          ...styles.button,
          ...styles.buttonImage,
          backgroundImage: `url(${part.abilities[0].backgroundUrl})`,
        }}
        onClick={handlePlus}
      ></button>
      <button
        style={{ ...styles.button, ...styles.textButton }}
        onClick={handleLess}
      >
        {usedCard}
      </button>
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
