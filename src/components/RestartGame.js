import { useDispatch } from "react-redux";
import { restartEnergy } from "../actions/energyActions";

const RestartGame = ({ restartEnergies }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    restartEnergies();
    dispatch(restartEnergy);
  };
  return (
    <button style={styles.restartGame} onClick={handleClick}>
      Restart
    </button>
  );
};

const styles = {
  restartGame: {
    position: "absolute",
    top: "150px",
    left: "-23px",
    backgroundColor: "#DB4647",
    color: "white",
    fontWeight: "700",
    fontSize: "18px",
    border: "6px solid #5D330B",
    borderRadius: "10px",
    padding: "10px 15px",
    cursor: "pointer",
    margin: "0px 6px",
  },
};

export default RestartGame;
