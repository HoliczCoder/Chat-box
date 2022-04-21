import React from "react";
import { useState, useEffect } from "react";
import { postHome } from "./services/homeService.js";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    try {
      const reps = postHome({
        q: "London",
        appid: "5210a58cf5311370ba8867f03f9e4766",
      }).then((a) => {
        console.log(a);
      });
      /*       const res = axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: { q: "London", appid: "5210a58cf5311370ba8867f03f9e4766" }, */
    } catch (e) {
      console.log(e);
    }
  }, []);
  // console.log(articles);
  return (
    <>
      <div>
        {articles.length > 0 &&
          articles.map((item, index) => (
            <div key={`articles-${index}`}>
              <div> {item.author} </div>
              <img src={item.urlToImage} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
