import * as React from "react"
import "./intro.scss"


const introData = {
  title: "Hi! ",
  beforeName: "I'm Henry. ",
  name: "It is nice to meet you",
  afterName: " ",
  image :'/images/emojis/henry-tran.JPG',
};
const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseOver = _ => {
    setIsHovering(true);
  };
  const onMouseOut = _ => {
    setIsHovering(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);
  }, []);

  return <header className="intro">
    <h1 className="intro__hello">{introData.title}
    </h1>

    <img src={introData.image} alt="Henry Tran" className="intro__image" />

    <h2 className="intro__tagline">{introData.beforeName}
      <span className="name">{introData.name}</span>{introData.afterName}
    </h2>
  </header>
};

export default Intro
