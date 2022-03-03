const initialState = {
  enemyOne: {},
  enemyTwo: {},
  enemyThree: {},
};

export const enemiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@enemies/setAxieOne":
      return {
        ...state,
        enemyOne: action.payload,
      };
    default:
      return state;
  }
};
