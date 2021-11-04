import { PageContent } from "../../components/page-content";
import React from "react";
import style from "./style.module.scss";
import { weatherReport } from "../../assets/images";

const Home = () => {
  return (
    <PageContent>
      <div className={style.home__container}>
        <div className={style.span__container}>
          <span style={{ color: "#E75480" }}>We</span>
          <span style={{ color: "green" }}>Can</span>
          <span style={{ color: "blue" }}>[Forecast]</span>
          <span style={{ color: "orange" }}>It</span>
        </div>
        <img src={weatherReport} />
      </div>
    </PageContent>
  );
};

export default Home;
