import React, { useEffect, useState } from "react";

export default function ChildComponents({ GetData }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("Child Component - useEffect - GetData");

    GetData("comments")
      .then((res) => res.json)
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [GetData]);
  return (
    <div>
      <p>Child Components</p>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
}
