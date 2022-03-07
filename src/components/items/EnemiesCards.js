import { useState } from "react";
import { useSelector } from "react-redux";
import { EnemyCards } from "./EnemyCards";
import { NoEnemies } from "./NoEnemies";
import { AxieFinder } from "./AxieFinder";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export const EnemiesCards = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { enemyOne, enemyTwo, enemyThree } = useSelector(
    (state) => state.enemiesStore
  );

  const needFill = () =>
    Object.keys(enemyTwo).length === 0 && Object.keys(enemyThree).length === 0;

  if (needFill && Object.keys(enemyOne).length === 0) {
    return <NoEnemies />;
  }

  return (
    <div style={styles.container}>
      <Modal
        open={modalVisible}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <AxieFinder owner={enemyOne.owner} enemyOne={enemyOne.id} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      {needFill ? (
        !modalVisible && setModalVisible(true)
      ) : (
        <div style={styles.cardsContainer}>
          <EnemyCards enemy={enemyOne} />
          <EnemyCards enemy={enemyTwo} />
          <EnemyCards enemy={enemyThree} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "510px",
    marginTop: "20px",
    border: "6px solid #5D330B",
    borderRadius: "10px",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};
