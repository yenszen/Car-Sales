export const addItem = item => {
  return {
    type: "ADD_FEATURE",
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: "REMOVE_FEATURE",
    payload: item
  };
};
