import React, { useState } from "react";
import { createArt } from "../services/art";

export default function Art({ id }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // this will redirect to the wallet for signing a transaction
    createArt(title, price);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={({ target }) => setPrice(target.value)}
      />
      <button>Create Art</button>
    </form>
  );
}
