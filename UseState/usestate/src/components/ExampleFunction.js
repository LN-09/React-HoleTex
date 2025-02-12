import React, { useState } from "react";

export default function ExampleFunction() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "test",
    age: 12,
  });
  const handleClick = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
    setCount((prevState) => {
      return prevState + 1;
    });
    setUser({
      name: "Updated",
    });
  };
  return (
    <div>
      <pre>Function Components</pre>
      <p>You click count {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
