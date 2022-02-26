import { useState } from "react";
import { Typography } from "@mui/material";
import ButtonLess from "./ButtonLess";
import ButtonPlus from "./ButtonPlus";

const EnergyGained = () => {
  const [value, setValue] = useState(0);

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
        <ButtonLess value={value} setValue={setValue} add={false} />
        <ButtonPlus setValue={setValue} add={true} />
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

export default EnergyGained;
