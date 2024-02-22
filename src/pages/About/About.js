import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import imgBannerAbout from "../../assets/img_banner_about.png";
import Collapse from "../../components/Collapse/Collapse";
import CollapseData from "../../datas/collapse.json";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />

        <div className="collapse">
          <div className="collapse_dropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;