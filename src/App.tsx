import React, { useState } from "react";
import TextEditor from "./components/TextEditor";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const fetchNew = () => {
    fetch(
      `https://hipsum.co/api/?type=hipster-centric&sentences=1&_rand=${new Date().getTime()}`
    )
      .then((response) => response.json())
      .then(([result]) => setText(result));
  };
  return <TextEditor text={text} onComplete={fetchNew} />;
}

export default App;
