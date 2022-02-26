import { useDispatch } from "react-redux";
import { addEnergy, removeEnergy } from "../actions/energyActions";

const ButtonPlus = ({ setValue, add }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(add ? addEnergy : removeEnergy);
    setValue((val) => {
      if (val < 9) {
        return val + 1;
      }
      return val;
    });
  };

  return (
    <button style={styles.buttonPlus} onClick={handleClick}>
      +
    </button>
  );
};

const styles = {
  buttonPlus: {
    backgroundColor: "#00B1CB",
    color: "white",
    fontWeight: "700",
    fontSize: "50px",
    border: "6px solid #5D330B",
    borderRadius: "10px",
    padding: "0px 15px",
    cursor: "pointer",
    margin: "0px 6px",
  },
};

export default ButtonPlus;
