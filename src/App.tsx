import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import Analysis from "./components/Analysis";

import "./App.css";
import "balloon-css";
import Footer from "./components/Footer";

const App = () => {
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
        increaseErrors={() => setErrors(errors + 1)}
        onComplete={fetchNew}
      />
      <Footer />
    </>
  );
};

export default App;
