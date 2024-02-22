import React from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import imgBanner from "../../assets/img_banner.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs." image={imgBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
