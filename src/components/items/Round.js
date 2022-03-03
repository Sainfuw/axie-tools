import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export const Round = () => {
  const { round } = useSelector((state) => state.energyStore);

  return (
    <Typography
      component="h5"
      variant="h5"
      align="center"
      color="text.secondary"
    >
      Round {round}
    </Typography>
  );
};
