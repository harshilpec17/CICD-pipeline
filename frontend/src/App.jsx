import axios from "axios";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes").then((response) => {
      setJokes(response.data);
    });
  }, []);
  console.log(jokes);

  return (
    <>
      <h1>Harshil Frontend</h1>
      {jokes.map((joke) => (
        <>
          <h1>
            {joke.title}: {joke.content}
          </h1>
        </>
      ))}
    </>
  );
}

export default App;
