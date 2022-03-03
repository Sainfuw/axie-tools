import { Typography } from "@mui/material";
import { ButtonLess } from "../buttons/ButtonLess";
import { ButtonPlus } from "../buttons/ButtonPlus";

export const EnergyDestroyed = ({ energyDestroyed, setEnergyDestroyed }) => {
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
        <ButtonLess
          value={energyDestroyed}
          setValue={setEnergyDestroyed}
          add={true}
        />
        <ButtonPlus setValue={setEnergyDestroyed} add={false} />
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
    minWidth: "190px",
  },
};
