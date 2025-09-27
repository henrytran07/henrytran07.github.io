import * as React from "react";
import "./switch.scss";

const Switch = () => {
  React.useEffect(() => {
    // Always apply dark mode when the page loads
    document.body.classList.add('black');
  }, []); // This effect runs only once when the component is mounted

  return null; // No need to render anything
};

export default Switch;
