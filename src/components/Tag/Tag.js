import React from "react";

function Tag({ nom }) {
  return (
    <div className="tag_container">
      <div className="tag_container_button">{nom}</div>
    </div>
  );
}

export default Tag;
