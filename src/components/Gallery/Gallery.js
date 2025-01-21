import React from "react";
import { Link } from "react-router-dom";
import logements from "../../datas/logements.json";
import Card from "../Cards/Card";

const Gallery = () => {
  return (
    <div className="home_gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/projet_kasa/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;