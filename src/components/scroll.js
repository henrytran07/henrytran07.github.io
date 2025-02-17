import * as React from "react"

const Scroll = () => {
  const topButtonRef = React.useRef(null);
  const [showTopButton, setShowTopButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const ScrollReveal = require('scrollreveal').default;
    const sr = ScrollReveal({
      reset: false,
      duration: 600,
      easing: 'cubic-bezier(.694,0,.335,1)',
      scale: 1,
      viewFactor: 0.3,
    });

    sr.reveal('.background');
    sr.reveal('.skills');
    sr.reveal('.experience', { viewFactor: 0.2 });
    sr.reveal('.featured-projects', { viewFactor: 0.1 });
    sr.reveal('.other-projects', { viewFactor: 0.05 });
  }, []);


  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button id="top-button" ref={topButtonRef} onClick={handleClick} style={{ display: showTopButton ? 'block' : 'none' }}>
        <img src="./images/emojis/pointing-up.png" alt=""/>
      </button>
    </>
  );
};

export default Scroll;