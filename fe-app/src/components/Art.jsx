import React, { useEffect, useState } from "react";
import { getArtById } from "../services/art";

export default function Art({ id }) {
  const [art, setArt] = useState([]);

  useEffect(() => {
    getArtById(id).then(setArt);
  }, [id]);

  return (
    <section>
      <p>{art.title}</p>
      <p>{art.price}</p>
    </section>
  );
}
