import * as React from "react";

const backgroundData = {
  title: "Background",
  part1: "I am currently an electrical engineering & computer science (EECS) student at ",
  part2: "Mount San Antonio College",
  part2Href: "https://www.mtsac.edu/",
  line2: "I'm a big matcha fan, so I often search for the best matcha spots in LA on Fridays.",
  line3Part1: "I also love playing PS5 with my younger brother at home, watching League of Legends (LOL), and binge-watching K-dramas.",
};

const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <a className="underline-link" href={backgroundData.part2Href} target="_blank" rel="noreferrer">
          {backgroundData.part2}
        </a>
      </p>
      <p>
        {backgroundData.line2}
      </p>
    </div>
  </section>
);

export default Background;
