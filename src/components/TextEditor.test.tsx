import React from "react";
import { mount, ReactWrapper } from "enzyme";

import TextEditor from "./TextEditor";
import { act } from "react-dom/test-utils";

// simulates key down and key up actions with rerenders inbetween
const simulateKeyStroke = (
  key: string,
  map: { [x: string]: any; keydown?: any; keyup?: any },
  wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
) => {
  act(() => {
    map.keydown({ key });
  });
  wrapper.update();

  act(() => {
    map.keyup();
  });
  wrapper.update();
};

describe("TextEditor tests", () => {
  test("completes the edit flow", () => {
    const map: { [x: string]: any } = {};
    window.addEventListener = jest.fn((event: string, cb) => {
      map[event] = cb;
    });
    const onComplete = jest.fn();
    const wrapper = mount(<TextEditor text="test" onComplete={onComplete} />);
    simulateKeyStroke("t", map, wrapper);
    simulateKeyStroke("e", map, wrapper);
    simulateKeyStroke("s", map, wrapper);
    simulateKeyStroke("t", map, wrapper);
    expect(onComplete).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  test("handles errors", () => {
    const map: { [x: string]: any } = {};
    window.addEventListener = jest.fn((event: string, cb) => {
      map[event] = cb;
    });
    const onComplete = jest.fn();
    const wrapper = mount(<TextEditor text="test" onComplete={onComplete} />);
    simulateKeyStroke("x", map, wrapper);
    simulateKeyStroke("t", map, wrapper);
    simulateKeyStroke("n", map, wrapper);
    simulateKeyStroke("Shift", map, wrapper);
    expect(onComplete).toHaveBeenCalledTimes(0);
    expect(wrapper).toMatchSnapshot();
  });
});
