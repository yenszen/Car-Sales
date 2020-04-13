export const addItem = item => {
  return {
    type: "ADD_FEATURE",
    payload: item
  };
};

export const removeItem = itemId => {
  return {
    type: "REMOVE_FEATURE",
    payload: itemId
  };
};
