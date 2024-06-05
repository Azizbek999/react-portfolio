import React, { useState, useEffect } from "react";

const App = () => {
  // get the initial color scheme from local storage or use dark as default
  const initialColorScheme = localStorage.getItem("colorScheme") || "dark";

  // create a state variable to store the current color scheme
  const [colorScheme, setColorScheme] = useState(initialColorScheme);

  // create a function to toggle the color scheme
  const toggleColorScheme = () => {
    // if the current color scheme is dark, switch to light
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else {
      // otherwise, switch to dark
      setColorScheme("dark");
    }
  };

  // use an effect hook to update the local storage whenever the color scheme changes
  useEffect(() => {
    localStorage.setItem("colorScheme", colorScheme);
  }, [colorScheme]);

  return (
    <div className="App">
      <h1>React Color Scheme Example</h1>
      <button onClick={toggleColorScheme}>Toggle Color Scheme</button>
      {/* if the color scheme is dark, add a border style to the div */}
      <div style={colorScheme === "dark" ? { border: "2px solid white" } : null}>
        This is a div
      </div>
    </div>
  );
};

export default App;
