import * as React from "react";
import "./intro.scss";

const introData = {
  title: "Hi! I'm Henry.",
  beforeName: "It is nice to meet you",
  image: '/images/emojis/henry-tran.JPG',
};

const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  const onMouseOver = () => {
    setIsHovering(true);
  };

  const onMouseOut = () => {
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

  return (
    <header className="intro">
      <h1 className="intro__hello">{introData.title}</h1>
      <h2 className="intro__tagline">{introData.beforeName}</h2> {/* Make this bold */}
      <img src={introData.image} alt="Henry Tran" className="intro__image" />
    </header>
  );
};

export default Intro;
