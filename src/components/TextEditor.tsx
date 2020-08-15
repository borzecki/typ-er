import React, { useState, useEffect } from "react";
import classnames from "classnames";

import useKeyPress from "../hooks/useKeyPress";

const Letter = ({ char, state }: { char: string; state: any }) => (
  <span className={classnames(state, { space: char === " " })}>{char}</span>
);

const TextEditor = ({
  text,
  onComplete,
}: {
  text: string;
  onComplete: () => void;
}) => {
  const key = useKeyPress();
  const [currentIndex, setIndex] = useState(0);
  const [failed, setFailed] = useState<Set<number>>(new Set([]));

  useEffect(() => {
    if (currentIndex === text.length) {
      onComplete();
      setFailed(new Set());
      setIndex(0);
    }
    if (key === "") return;
    if (key === text[currentIndex]) {
      setIndex(currentIndex + 1);
    } else {
      failed.add(currentIndex);
      setFailed(failed);
    }
    // eslint-disable-next-line
  }, [key]);

  const getState = (index: number) => {
    return {
      current: index === currentIndex,
      failed: failed.has(index),
      success: index < currentIndex && !failed.has(index),
      unused: index > currentIndex,
    };
  };

  return (
    <div className="editor">
      {[...text].map((char, index) => (
        <Letter key={index} char={char} state={getState(index)} />
      ))}
    </div>
  );
};

export default TextEditor;
