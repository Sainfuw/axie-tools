const initialState = {
  enemyOne: {},
  enemyTwo: {},
  enemyThree: {},
};

export const enemiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@enemies/setEnemyAxie":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
