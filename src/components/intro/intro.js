import * as React from "react"
import "./intro.scss"


const introData = {
  title: "Hi! ",
  beforeName: "I'm Henry. ",
  name: "It is nice to meet you",
  afterName: " ",
  contact: "Get in touch ",
  email: "henrytran0715@gmail.com",
  mailTo: "mailto:henrytran0715@gmail.com",
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
      <span className={isHovering ? "emoji wave-hand animated wave" : "emoji wave-hand animated"} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onFocus={onMouseOver} onBlur={onMouseOut} role="button" tabIndex={0} aria-label="wave hand"></span>
    </h1>

    <h2 className="intro__tagline">{introData.beforeName}
      <span className="name">{introData.name}</span>{introData.afterName}
    </h2>
  </header>
};

export default Intro
