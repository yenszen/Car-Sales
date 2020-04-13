import React from "react";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeItem(props.feature.id)}
      >
        X
      </button>
      {`${props.feature.name} (${props.feature.price})`}
    </li>
  );
};

export default AddedFeature;
