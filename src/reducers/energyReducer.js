import types from "../types";

const initialState = {
  round: 1,
  energy: 3,
};

export const energyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addEnergy:
      return state.energy >= 10
        ? state
        : {
            ...state,
            energy: state.energy + 1,
          };
    case types.removeEnergy:
      return state.energy === 0
        ? state
        : {
            ...state,
            energy: state.energy - 1,
          };
    case types.restartEnergy:
      return {
        ...state,
        round: 1,
        energy: 3,
      };
    case types.nextTurn:
      return state.energy >= 8
        ? {
            ...state,
            round: state.round + 1,
            energy: 10,
          }
        : {
            ...state,
            round: state.round + 1,
            energy: state.energy + 2,
          };
    default:
      return state;
  }
};
