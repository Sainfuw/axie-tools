import Container from "@mui/material/Container";

import { Round } from "../items/Round";
import { EnergyCount } from "../items/EnergyCount";
import { EnergyVariants } from "../items/EnergyVariants";
import { Enemies } from "./Enemies";

export const Content = () => (
  <Container
    disableGutters
    maxWidth="sm"
    component="main"
    sx={{ pt: 2, pb: 6 }}
  >
    <Round />
    <EnergyCount />
    <EnergyVariants />
    <Enemies />
  </Container>
);
