import ChildComponents from "../src/components/ChildComponents";
import { useCallback, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const GetData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`); // Tạoo api có dữ liệu giả
  }, []);
  const handleClick = () => {
    GetData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <>
      <p>Data:</p>
      <button onClick={handleClick}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponents GetData={GetData} />
    </>
  );
}

export default App;
