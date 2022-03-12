import { fetchAxieInfo } from "../api/queries";

export const getAxieInfo = (axieId) => {
  return async (dispatch) => {
    try {
      const axie = await fetchAxieInfo(Object.values(axieId)[0]);
      dispatch(setEnemyAxie({ [Object.keys(axieId)[0]]: axie }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const setEnemyAxie = (payload) => ({
  type: "@enemies/setEnemyAxie",
  payload,
});
