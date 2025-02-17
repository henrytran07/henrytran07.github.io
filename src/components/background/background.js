import * as React from "react"


const backgroundData = {
  title: "Background",
  part1: "Currently, I serve as the Consulting Head of Engineering at ",
  part2: "Talking Yak",
  part2Href: "https://talkingyak.com/",
  part3: " where I lead a team in developing innovative tech solutions.",
  line2: "As a hands-on full-stack software engineer, I adeptly bridge the gap between backend and frontend teams, crafting robust architectures in the process. I consistently stay abreast of the latest developments in my field, diligently seeking opportunities to learn and explore emerging technologies.",
  line3Part1: "When I'm not in front of a computer screen",
  line3Part2: ", you'll likely find me engaging in a game of badminton, exploring new cuisines, or delving into spontaneous DIY projects—all of which I enjoy sharing on my ",
  line3Part3: "YouTube channel",
  line3Part3Href: "https://www.youtube.com/@kavindiy",
  line3Part4: ".",
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
