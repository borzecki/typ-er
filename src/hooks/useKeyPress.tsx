import { useEffect, useState } from "react";

const functionKeys = [
  "Shift",
  "Control",
  "Meta",
  "CapsLock",
  "Alt",
  "Backspace",
  "Escape",
];

function useKeyPress() {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState("");

  // If pressed key is our target key then set to true
  function downHandler({ key }: { key: string }) {
    if (functionKeys.indexOf(key) === -1) setKeyPressed(key);
  }

  // // If released key is our target key then set to false
  const upHandler = () => {
    setKeyPressed("");
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

export default useKeyPress;
