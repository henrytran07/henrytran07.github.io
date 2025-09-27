import * as React from "react";
import "./switch.scss";

const Switch = () => {
  React.useEffect(() => {
    // Always apply dark mode when the page loads
    document.body.classList.add('night');
  }, []); // This effect runs only once when the component is mounted

  return (
    <div className="switch-wrapper">
      <div className="sun"></div>
      <div className="moon"></div>
    </div>
  );
};

export default Switch;
