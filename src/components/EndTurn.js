import { useDispatch } from "react-redux";
import { nextTurn } from "../actions/energyActions";

const EndTurn = ({ restartEnergies }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    restartEnergies();
    dispatch(nextTurn);
  };

  return (
    <div style={styles.container}>
      <button style={styles.endTurn} onClick={handleClick}>
        End Turn
      </button>
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
    backgroundColor: "#E38711",
    textShadow: "3px 4px #8E6F6F",
    color: "white",
    fontWeight: "700",
    fontSize: "40px",
    border: "6px solid #5D330B",
    borderRadius: "10px",
    padding: "5px 115px",
    cursor: "pointer",
    margin: "30px 0px",
    "&:hover": {
      backgroundColor: "#efefef",
      color: "red",
    },
  },
};

export default EndTurn;
