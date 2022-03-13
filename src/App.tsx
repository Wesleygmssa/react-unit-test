/* eslint-disable react/button-has-type */
import React, { useState } from "react";

const Test: React.FC = () => {
  const [list, setList] = useState(["Deigo", "Juan", "Pedro"]);

  function addToList() {
    setList([...list, "Wesley"]);
  }
  return (
    <>
      <h1 className="test" data-testid="test3">
        Hello World
      </h1>

      <button onClick={addToList}>Add to list</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Test;
