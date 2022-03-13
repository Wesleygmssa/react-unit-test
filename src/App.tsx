/* eslint-disable react/button-has-type */
import React, { useState } from "react";

const Test: React.FC = () => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(["Deigo", "Juan", "Pedro"]);

  function addToList() {
    setTimeout(() => {
      setList([...list, newItem]);
    }, 500);
  }

  function removeFromList(item: string) {
    setTimeout(() => {
      setList((state) => state.filter((i) => i !== item));
    }, 500);
  }
  return (
    <>
      <h1 className="test" data-testid="test3">
        Hello World
      </h1>
      <input
        value={newItem}
        placeholder="Novo item"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Add to list</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Test;
