import Container from "@mui/material/Container";

import Round from "./Round";
import EnergyCount from "./EnergyCount";
import EnergyVariants from "./EnergyVariants";

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
  </Container>
);

export default Content;
