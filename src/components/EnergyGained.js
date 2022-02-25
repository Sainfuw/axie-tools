import { Typography } from "@mui/material";
import ButtonLess from "./ButtonLess";
import ButtonPlus from "./ButtonPlus";

const EnergyGained = () => {
  return (
    <div style={styles.energyContainer}>
      <Typography
        component="p"
        variant="h5"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        Energy Gained
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default EnergyGained;
