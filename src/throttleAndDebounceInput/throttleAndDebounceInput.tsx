import React, { ChangeEvent, useRef, useState } from "react";
import throttle from "../utils/throttle";
import debounce from "../utils/debounce";
import throttleAndDebounce from "../utils/throttleWithDebounce";

const ThrottleAndDebounceInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [throttleLog, setThrottleLog] = useState<string[]>([]);
  const [debounceLog, setDebounceLog] = useState<string[]>([]);
  const [combinedLog, setCombinedLog] = useState<string[]>([]);

  const delay = 500;

  const handleThrottle = useRef(
    throttle(() => {
      setThrottleLog((prevLog) => [...prevLog, new Date().toISOString()]);
    }, delay)
  ).current;

  const handleDebounce = useRef(
    debounce(() => {
      setDebounceLog((prevLog) => [...prevLog, new Date().toISOString()]);
    }, delay)
  ).current;

  const handleCombined = useRef(
    throttleAndDebounce(() => {
      setCombinedLog((prevLog) => [...prevLog, new Date().toISOString()]);
    }, delay)
  ).current;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    handleThrottle();
    handleDebounce();
    handleCombined();
  };

  return (
    <div>
      <h1>Visualization of Throttle and Debounce Behavior</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Keep typing anything!"
      />
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <div>
          <h2>Throttle</h2>
          <ul>
            {throttleLog.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Debounce</h2>
          <ul>
            {debounceLog.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Throttle with Debounce</h2>
          <ul>
            {combinedLog.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThrottleAndDebounceInput;
