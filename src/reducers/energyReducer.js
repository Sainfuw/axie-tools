const initialState = {
  round: 1,
  energy: 3,
};

export const energyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@energy/add":
      return state.energy >= 10
        ? state
        : {
            ...state,
            energy: state.energy + action.payload,
          };
    case "@energy/remove":
      return state.energy === 0
        ? state
        : {
            ...state,
            energy: state.energy - action.payload,
          };
    case "@energy/restart":
      return {
        ...state,
        round: 1,
        energy: 3,
      };
    case "@energy/nextTurn":
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
