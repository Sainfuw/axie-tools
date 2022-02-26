import Container from "@mui/material/Container";

import Round from "./Round";
import EnergyCount from "./EnergyCount";
import EnergyVariants from "./EnergyVariants";
import EndTurn from "./EndTurn";

const Content = () => (
  <Container
    disableGutters
    maxWidth="sm"
    component="main"
    sx={{ pt: 2, pb: 6 }}
  >
    <Round />
    <EnergyCount />
    <EnergyVariants />
    <EndTurn />
  </Container>
);

export default Content;
