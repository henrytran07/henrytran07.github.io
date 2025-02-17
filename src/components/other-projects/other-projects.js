import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "GuessBuzz",
    "url": "https://github.com/skavinvarnan/whistler-ios",
    "description": "I developed a score prediction app for the IPL as a hobby project during the 2018 season. This app is available on both iOS and Android platforms. It allows users to make score predictions for IPL matches, adding an exciting and interactive element to the cricket-watching experience. <br> <a class='small' href='https://github.com/skavinvarnan/whistler-ios'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "Node.js"},
      {"thing": "Firebase"},
      {"thing": "iOS Native"},
      {"thing": "Android Native"},
      {"thing": "MongoDB"},
      {"thing": "Redis"},
      {"thing": "Docker"},
      {"thing": "Digital Ocean"},
      {"thing": "Swift"},
      {"thing": "Kotlin"},
    ]
  },
  {
    "name": "Covidstat",
    "url": "https://www.linkedin.com/posts/kavin-varnan-08083229_covid-covid19-dashboard-activity-6668032584783663104-cRzB?utm_source=share&utm_medium=member_desktop",
    "description": "I've developed an elegant web application that displays COVID-19 statistics. The website dynamically retrieves data from reputable sources such as John Hopkins University and government websites to ensure accuracy. What sets it apart is the inclusion of a <a class='underline-link' href='https://graphql.org'>GraphQL</a> endpoint, providing a public API for seamless data consumption by anyone interested. Explore the API Documentation for further details. This comprehensive tool not only offers insightful statistics but also demonstrates a commitment to transparency and accessibility in sharing crucial information about the pandemic. <br> <a class='small' href='https://github.com/COVID19-SARS-CoV-2/web-covid-api'>👨🏻‍💻API Documentation👨🏻‍💻</a>",
    "used": [
      {"thing": "Node.js"},
      {"thing": "Docker"},
      {"thing": "MongoDB"},
      {"thing": "GraphQL"},
      {"thing": "Redis"},
      {"thing": "Digital Ocean"},
      {"thing": "API"},
      {"thing": "Open-Source"},
      {"thing": "React"},
    ]
  },
  {
    "name": "Gallery For Lollipop",
    "url": "https://play.google.com/store/apps/details?id=com.gallery.lollipop",
    "description": "When Google introduced Google Photos, they unexpectedly removed the widely-used Gallery app from Android with the release of Android Lollipop. Leveraging the open-source code from Android, I took it upon myself to recreate and revive the Gallery app, ensuring users could continue to enjoy a familiar and essential feature. Now, you can experience the convenience and functionality of the Gallery app once again, thanks to this recreation.",
    "used": [
      {"thing": "Android Native"},
      {"thing": "Java"},
      {"thing": "Open-Source"},
      {"thing": "AdMob"},
    ]
  },
  {
    "name": "NHS Covid App",
    "url": "https://x.com/skvarnan/status/1242406271942144000",
    "description": "At the onset of the pandemic, widespread panic ensued, and there was a noticeable absence of readily accessible guidelines. In collaboration with the NHS, I contributed to the creation of an app designed to streamline the dissemination of crucial guidelines. This innovative solution not only facilitated easy updates for the NHS but also addressed the challenge of limited internet connectivity within hospitals. The app's offline functionality ensured that vital information remained accessible, even in areas with restricted internet access, supporting healthcare professionals in their critical work during challenging circumstances. <br> <a class='small' href='https://github.com/skavinvarnan/nhs-covid-flutter'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "Android Native"},
      {"thing": "iOS Native"},
      {"thing": "Node.js"},
      {"thing": "Strapi"},
      {"thing": "MongoDB"},
      {"thing": "Docker"},
      {"thing": "GraphQL"},
      {"thing": "Digital Ocean"},
      {"thing": "Swift"},
      {"thing": "Kotlin"},
    ]
  },
  {
    "name": "CrossPlatform AES",
    "url": "https://github.com/skavinvarnan/Cross-Platform-AES",
    "description": "I've developed an open-source library for AES-256 encryption and decryption of strings, designed to seamlessly integrate across Android, iOS, and Javascript platforms. This versatile library enhances data security, offering a robust solution for safeguarding sensitive information. Whether you're working on Android, iOS, or web applications, this library provides a reliable and consistent encryption and decryption mechanism for strings, ensuring data confidentiality and integrity in your projects. <br> <a class='small' href='https://github.com/skavinvarnan/Cross-Platform-AES'>🏆 100+ Starts on Github 🏆</a>",
    "used": [
      {"thing": "Kotlin"},
      {"thing": "Swift"},
      {"thing": "JavaScript"},
    ]
  },
  {
    "name": "Social Evening",
    "url": "https://github.com/skavinvarnan/SocialEvening",
    "description": "This was an interview project<br><br>I successfully developed and documented the entire app in an impressive timeframe of less than seven days. This rapid turnaround not only showcases my efficiency in app development but also underscores the meticulous attention given to detailed documentation. The result is a well-crafted application, ready to make an impact with its functionality and comprehensive supporting documentation. <br> <a class='small' href='https://github.com/skavinvarnan/SocialEvening'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "img": "weather",
    "used": [
      {"thing": "Android Native"},
      {"thing": "Kotlin"},
      {"thing": "Node.js"},
      {"thing": "Parse Server"},
      {"thing": "PostgreSQL"},
      {"thing": "Heroku"},
    ]
  },
  {
    "name": "2048 Terminal",
    "url": "https://github.com/skavinvarnan/2048",
    "description": "Experience a captivating 2048 game right in your terminal. Immerse yourself in the challenge of this numeric puzzle, all within the simplicity of a command-line interface. Enjoy the strategic thrill as you merge tiles to reach the elusive 2048. Ready for a brain-teasing adventure? Play the terminal-based 2048 game now!. <br> <a class='small' href='https://github.com/skavinvarnan/2048'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "Shell"},
      {"thing": "JavaScript"},
    ]
  },
  {
    "name": "CIC Calculator",
    "url": "https://github.com/skavinvarnan/cic-flutter",
    "description": "Explore an easy-to-use compound interest calculator. This straightforward tool allows you to effortlessly calculate compound interest, making financial planning a breeze. Crunch numbers with simplicity and precision to get a clear understanding of your savings and investments. Try out our user-friendly compound interest calculator for hassle-free financial calculations! <br> <a class='small' href='https://github.com/skavinvarnan/cic-flutter'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "Flutter"},
      {"thing": "Dart"},
      {"thing": "Android"},
      {"thing": "iOS"},
      {"thing": "Web"},
    ]
  },
  {
    "name": "Personal Website V1",
    "url": "https://github.com/skavinvarnan/skvarnan",
    "description": "Craft a stunning personal website that highlights your portfolio and achievements. Showcase your work in a professionally designed space tailored to reflect your unique talents. Let's build an online presence that leaves a lasting impression. Elevate your personal brand with a website that speaks volumes about your skills and accomplishments. <br> <a class='small' href='https://github.com/skavinvarnan/skvarnan'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "React"},
      {"thing": "Gastby"},
      {"thing": "JavaScript"},
    ]
  }
]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Other Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
