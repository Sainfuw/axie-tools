import { useState, useEffect } from "react";
import { getOwnerAxies } from "../../helpers/getOwnerAxies";

export const AxieFinder = ({ owner, enemyOne }) => {
  const [axiesArray, setAxiesArray] = useState([]);

  useEffect(() => {
    let axies = [];
    const getAxies = async () => {
      axies = await getOwnerAxies(owner);
      setAxiesArray(axies.filter((axie) => axie.id === enemyOne));
    };

    getAxies();
  }, []);

  const handleSelection = (axie) => {};

  return (
    <>
      <div className="axie-selection-container">
        {axiesArray &&
          axiesArray.map((axie) => (
            <div key={axie.id} onClick={() => handleSelection(axie)}>
              <img
                src={axie.image}
                alt={axie.name}
                className="axie-selection-image"
              />
              <span className="axie-selection-id">{axie.id}</span>
            </div>
          ))}
      </div>
    </>
  );
};
