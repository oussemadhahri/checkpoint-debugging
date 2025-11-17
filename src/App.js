import React, { useState } from 'react';
import './App.css';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
    </div>
  );
}

function UserProfile({ name, age = 'Unknown' }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  const [userName, setUserName] = useState('oussema');

  return (
    <div className="App">
      <h1>React Debugging Practice</h1>

      <UserProfile name={userName} age={23} />

      <Counter initialCount={5} />
    </div>
  );
}

export default App;