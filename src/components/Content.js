import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import EnergyGained from "./EnergyGained";
import EnergyDestroyed from "./EnergyDestroyed";
import EndTurn from "./EndTurn";

const Content = () => (
  <Container
    disableGutters
    maxWidth="sm"
    component="main"
    sx={{ pt: 2, pb: 6 }}
  >
    <Typography
      component="h5"
      variant="h5"
      align="center"
      color="text.secondary"
    >
      Round 2
    </Typography>
    <Typography component="h1" variant="h1" align="center" color="text.primary">
      3
    </Typography>
    <EnergyGained />
    <EnergyDestroyed />
    <EndTurn />
  </Container>
);

export default Content;
