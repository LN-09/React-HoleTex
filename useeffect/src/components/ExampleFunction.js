import React, { useEffect, useState } from "react";

export default function ExampleFunction() {
  const [count, setCount] = useState(0);
  const [action, setACtion] = useState("");
  const [scrollPostion, setScrollPosition] = useState(0);

  useEffect(() => {
    //ComponentDidMount && ComponentDidUpdate
    document.title = `You clicked ${count} times`;
    console.log("useEffect");

    return () => {
      //cleanup function
      console.log("useEffect-count-cleanup");
    };
  }, [count]);

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log({ res }))
      .catch((err) => console.log({ err }));
  }, [action]);

  const handeScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    //ComponentDidMount
    document.addEventListener("scroll", handeScroll);
    return () => {
      //componentsWilllUnMount
      document.removeEventListener("scroll", handeScroll);
    };
  }, []);

  return (
    <div style={{ height: "3000px" }}>
      <pre>Function Components</pre>
      <p>You click count {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <button
        onClick={() => {
          setACtion("users");
        }}
      >
        Get Users
      </button>
      <button
        onClick={() => {
          setACtion("comments");
        }}
      >
        Get Comments
      </button>

      <p style={{ position: "fixed", bottom: "20px", left: "20x" }}>
        {scrollPostion}
      </p>
    </div>
  );
}
