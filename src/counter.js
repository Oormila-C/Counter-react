import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>Counter Application</h1>

        <h2 className="count">{count}</h2>

        {count === 0 && (
          <p className="message">Minimum limit reached</p>
        )}

        <div className="button-group">
          <button className="btn increment" onClick={increment}>
            Increment
          </button>

          <button
            className="btn decrement"
            onClick={decrement}
            disabled={count === 0}
          >
            Decrement
          </button>

          <button className="btn reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;