import { fetchAxieInfo } from "../api/queries";

export const getAxieInfo = (axieId) => {
  return async (dispatch) => {
    try {
      const axie = await fetchAxieInfo(axieId);
      dispatch(setAxieOne(axie));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const setAxieOne = (payload) => ({
  type: "@enemies/setAxieOne",
  payload,
});
