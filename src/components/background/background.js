import * as React from "react"


const backgroundData = {
  title: "Background",
  part1: "I am currently an electrical undegraduate student at ",
  part2: "Mount San Antonio College",
  part2Href: "https://www.mtsac.edu/",
  part3: " where I am pursuing lower-division courses. Next year, I plan to transfer to a four-year university to further my studies as a Computer Science & Electrical Engineering student.",
  line2: "As a back-end developer, I diligently focus on the system's core mechanisms and work to extend its functionality, ensuring efficiency and scalability. Additionally, I am also concentrating on the field of machine learning to become more versatile and better equipped to handle a broader range of tasks at work.",
  line3Part1: "Beyond coding and innovation in engineering,",
  line3Part2: " my hideout is often at 24 Hour Fitness, where I relieve stress and work toward becoming a stronger, healthier version of myself.",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <a className="underline-link" href={backgroundData.part2Href} target="_blank" rel="noreferrer">{backgroundData.part2}</a>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>{backgroundData.line3Part2}
        <a className="underline-link" href={backgroundData.line3Part3Href} target="_blank" rel="noreferrer">{backgroundData.line3Part3}</a>
        {backgroundData.line3Part4}
      </p>
    </div>
  </section>
)

export default Background
