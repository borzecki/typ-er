import React, { useState } from "react";
import TextEditor from "./components/TextEditor";

import "./App.css";

const Analysis = ({ wpm, errors }: { wpm: any; errors: any }) => (
  <>
    <div className="score">{wpm}</div>
    <div className="errors">{errors > 0 && errors}</div>
  </>
);

function App() {
  const [text, setText] = useState("");
  const [started, setStarted] = useState(new Date().getTime());
  const [wpm, setWPM] = useState<number>();
  const [errors, setErrors] = useState<number>(0);

  const fetchNew = () => {
    const seconds = (new Date().getTime() - started) / 1000;
    const value = Math.round((text.length / 5 / seconds) * 60);
    if (text) setWPM(value);
    fetch(
      `https://hipsum.co/api/?type=hipster-centric&sentences=1&_rand=${new Date().getTime()}`
    )
      .then((response) => response.json())
      .then(([result]) =>
        setText(result.replace(/[.,&--+\d']/g, "").toLowerCase())
      );
  };
  return (
    <>
      <Analysis wpm={wpm} errors={errors} />
      <TextEditor
        text={text}
        resetTimer={() => setStarted(new Date().getTime())}
        onComplete={fetchNew}
        increaseErrors={() => setErrors(errors + 1)}
      />
    </>
  );
}

export default App;
