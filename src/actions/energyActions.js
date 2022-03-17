export const addEnergy = (payload) => ({
  type: "@energy/add",
  payload,
});

export const removeEnergy = (payload) => ({
  type: "@energy/remove",
  payload,
});

export const restartEnergy = {
  type: "@energy/restart",
};

export const nextTurn = {
  type: "@energy/nextTurn",
};
