import { Typography } from "@mui/material";
import { ButtonLess } from "../buttons/ButtonLess";
import { ButtonPlus } from "../buttons/ButtonPlus";

export const EnergyGained = ({ energyGained, setEnergyGained }) => {
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
        <ButtonLess
          value={energyGained}
          setValue={setEnergyGained}
          add={false}
        />
        <ButtonPlus setValue={setEnergyGained} add={true} />
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
