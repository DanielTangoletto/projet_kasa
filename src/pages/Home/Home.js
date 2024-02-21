import React from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import imgBanner from "../../assets/img_banner.png"


const Home = () => {
  return (
    <div className="home">
      <main>
        <Banner texte="Chez vous, partout et ailleurs." image={imgBanner} />
        <Gallery />
      </main>
    </div>
  );
};

export default Home;
