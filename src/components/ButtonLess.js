import { useDispatch } from "react-redux";
import { addEnergy, removeEnergy } from "../actions/energyActions";

const ButtonLess = ({ value, setValue, add }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(add ? addEnergy : removeEnergy);
    setValue((val) => {
      if (val > 0) {
        return val - 1;
      }
      return val;
    });
  };

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} hidden />
      <button style={styles.buttonLess} onClick={handleClick}>
        {value}
      </button>
    </>
  );
};

const styles = {
  buttonLess: {
    display: "inline",
    backgroundColor: "#DB4647",
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

export default ButtonLess;
