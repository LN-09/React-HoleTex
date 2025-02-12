import { useMemo, useState } from "react";

function expendsiveFunction(number) {
  console.log("Bat dau");
  const start = new Date();

  //wait 3sc
  while (new Date() - start < 3000);
  console.log("Ket thuc", new Date() - start, "ms");

  return number * number;
}

function App() {
  const [count, setCount] = useState();
  const [num, setNum] = useState();

  const [number] = useMemo(() => {
    return expendsiveFunction(num);
  }, [num]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>Number: {number}</p>
    </>
  );
}

export default App;
