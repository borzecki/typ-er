import React from "react";

const Analysis = ({ wpm, errors }: { wpm: any; errors: any }) => (
  <>
    <div className="score">
      <span aria-label={"this is your WPM score 💯"} data-balloon-pos="right">
        {wpm}
      </span>
    </div>
    <div className="errors">
      <span
        aria-label={"this is your error counter 🙊"}
        data-balloon-pos="left"
      >
        {errors > 0 && errors}
      </span>
    </div>
  </>
);

export default Analysis;
