import { useDispatch } from "react-redux";
import { addEnergy, removeEnergy } from "../../actions/energyActions";

export const ButtonLess = ({ value, setValue, add }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (value !== 0) {
      dispatch(add ? addEnergy(1) : removeEnergy(1));
      setValue(value - 1);
    }
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
