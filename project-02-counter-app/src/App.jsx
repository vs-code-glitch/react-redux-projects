import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function increment() {
    setCount((previousCount) => previousCount + step);
  }

  function decrement() {
    setCount((previousCount) => previousCount - step);
  }

  function reset() {
    setCount(0);
  }

  return (
    <main className="app">
      <section className="counter-card">
        
        <h1>Counter App</h1>
     

        <div className="count-display" arial-live="polite">
          {count}
        </div>

        <div className="step-control">
          <label htmlFor="step">Step size</label>
          <input 
            id="step"
            min="1"
            max="100"
            value={step}
            onChange={(event) => {
              const value = Number(event.target.value);

              if (value >= 1 && value <= 100) {
                setStep(value);
              }
            }}
          />

        </div>

        <div className="button-row">
          <button onClick={decrement}>- Decrese</button>
          <button onClick={reset} className="secondary">Reset</button>
          <button onClick={increment}>+ Increase</button>
        </div>

        <p className="status">
          {count === 0
            ? "Ready to count"
            : count > 0
              ? 'Positive count'
              : 'Negative count'
          }
        </p>
      </section>
    </main>
  )
}

export default App;