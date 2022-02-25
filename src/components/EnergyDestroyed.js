import { Typography } from "@mui/material";
import ButtonLess from "./ButtonLess";
import ButtonPlus from "./ButtonPlus";

const EnergyDestroyed = () => {
  return (
    <div style={styles.energyContainer}>
      <Typography
        component="p"
        variant="h5"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        Energy Destroyed
      </Typography>
      <div>
        <ButtonLess />
        <ButtonPlus />
      </div>
    </div>
  );
};

const styles = {
  energyContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default EnergyDestroyed;
