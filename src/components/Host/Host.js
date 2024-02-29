import React from "react";

function Host(props) {
  return (
    <>
      <div className="owner_name">{props.name}</div>
      <img className="owner_photo" src={props.picture} alt="Nom du propriétaire" />
    </>
  );
}

export default Host;
