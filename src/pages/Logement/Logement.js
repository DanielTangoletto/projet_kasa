import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageLogement from "../../components/PageLogement/PageLogement";

const Logement = () => {
  return (
    <div>
      <Header />
      <main>
        <PageLogement />
      </main>
      <Footer />
    </div>
  );
};

export default Logement;
