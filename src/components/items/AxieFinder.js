import { useState, useEffect } from "react";
import { getOwnerAxies } from "../../helpers/getOwnerAxies";

import Button from "@mui/material/Button";

export const AxieFinder = ({ owner, enemyOne }) => {
  const [axiesArray, setAxiesArray] = useState([]);
  const [selectedAxies, setSelectedAxies] = useState([]);

  useEffect(() => {
    const getAxies = async () => {
      const axies = await getOwnerAxies(owner);
      const filteredAxies = axies.filter((axie) => axie.id !== enemyOne);
      setAxiesArray(filteredAxies);
    };

    getAxies();
  }, []);

  const handleSelection = (axie) => {
    if (selectedAxies.includes(axie)) {
      setSelectedAxies(selectedAxies.filter((ax) => ax !== axie));
    } else if (selectedAxies.length < 2) {
      setSelectedAxies([...selectedAxies, axie]);
    }
  };

  return (
    <>
      <div style={styles.axieSelectionContainer}>
        {axiesArray &&
          axiesArray.map((axie) => (
            <div
              key={axie.id}
              onClick={() => handleSelection(axie.id)}
              style={styles.axieSelection}
              className={selectedAxies.includes(axie.id) && "selected"}
            >
              <img
                src={axie.image}
                alt={axie.name}
                style={styles.axieSelectionImage}
              />
              <p style={styles.axieSelectionId}>{axie.id}</p>
            </div>
          ))}
      </div>
      <div style={styles.buttonContainer}>
        <Button variant="contained">Send</Button>
      </div>
    </>
  );
};

const styles = {
  axieSelectionContainer: {
    display: "grid",
    margin: "auto",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "25px",
  },

  axieSelection: {
    border: "3px solid #5D330B",
    borderRadius: "6px",
    position: "relative",
  },

  axieSelectionImage: {
    width: "170px",
    height: "130px",

    transition: ".5s background-color .5s border",
  },

  axieSelectionId: {
    color: "#5D330B",
    fontWeight: "bold",
    position: "absolute",
    bottom: "-15px",
    left: "55px",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
};
