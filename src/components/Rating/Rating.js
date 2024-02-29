import React from "react";
import ratingStar from "../../assets/red_star.png";
import standardStar from "../../assets/grey_star.png";

function Rating(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate_container">
      {notes.map((note) =>
        score >= note ? (
          <img key={note.toString()} className="star" src={ratingStar} alt="star" />
        ) : (
          <img key={note.toString()} className="star" src={standardStar} alt="star" />
        )
      )}
    </div>
  );
}

export default Rating;
