import * as React from "react"
import "./switch.scss"

const Switch = () => {
  const isBrowser = typeof window !== "undefined";
  let prefersDarkMode = false;
  let savedMode = false;
  if (isBrowser) {
    prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    savedMode = localStorage.getItem('darkMode');
  }
  const [isChecked, setIsChecked] = React.useState(savedMode ? JSON.parse(savedMode) : prefersDarkMode);

  const toggleSwitch = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    localStorage.setItem('darkMode', JSON.stringify(newChecked));
  };

  React.useEffect(() => {
    if (isChecked) {
      document.body.classList.add('night');
    } else {
      document.body.classList.remove('night');
    }
  }, [isChecked]);

  return <div className="switch-wrapper">
    <div className="sun"></div>
    <div className="toggle-wrapper">
      <input id="switch" type="checkbox" onChange={toggleSwitch} checked={isChecked}/>
      <label htmlFor="switch" id="toggle">Toggle</label>
    </div>
    <div className="moon"></div>
  </div>
}

export default Switch
