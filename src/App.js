import React, { useState } from "react";
import PropTypes from "prop-types";

import "./App.css";

const App = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const changeCounterState = () => {
    setCounter(counter + 1)
  };

  return (
    <>
      <h1>Super contador mamalon</h1>
      <h1>{counter}</h1>
      <div style={{ display: "flex" }}>
        <button onClick={changeCounterState}>+1</button>
      </div>
    </>
  );
};

// eslint-disable-next-line react/no-typos
App.propTypes = {
  value: PropTypes.number.isRequired,
};

App.defaultProps = {
  value: 0,
};

export default App;
