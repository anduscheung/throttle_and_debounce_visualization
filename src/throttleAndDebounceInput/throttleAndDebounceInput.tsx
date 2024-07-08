import React, { ChangeEvent, useMemo, useState } from "react";
import throttle from "../utils/throttle";
import debounce from "../utils/debounce";
import throttleAndDebounce from "../utils/throttleWithDebounce";
const ThrottleAndDebounceInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [delay, setDelay] = useState<number>(500);
  const [throttleLog, setThrottleLog] = useState<string[]>([]);
  const [debounceLog, setDebounceLog] = useState<string[]>([]);
  const [combinedLog, setCombinedLog] = useState<string[]>([]);

  const handleThrottle = useMemo(
    () =>
      throttle(() => {
        setThrottleLog((prevLog) => [...prevLog, new Date().toISOString()]);
      }, delay),
    [delay]
  );

  const handleDebounce = useMemo(
    () =>
      debounce(() => {
        setDebounceLog((prevLog) => [...prevLog, new Date().toISOString()]);
      }, delay),
    [delay]
  );

  const handleCombined = useMemo(
    () =>
      throttleAndDebounce(() => {
        setCombinedLog((prevLog) => [...prevLog, new Date().toISOString()]);
      }, delay),
    [delay]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    handleThrottle();
    handleDebounce();
    handleCombined();
  };

  const handleDelayChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(event.target.value));
  };

  return (
    <div>
      <h1>Visualization of Throttle and Debounce Behavior</h1>
      <div style={{ marginTop: "20px" }}>
        <label>
          Delay (ms):
          <input
            type="range"
            min="100"
            max="2000"
            value={delay}
            onChange={handleDelayChange}
            step="100"
          />
          {delay} ms
        </label>
      </div>
      <input
        style={{ marginTop: "20px" }}
        type="text"
        placeholder="Keep typing anything!"
        value={inputValue}
        onChange={handleChange}
      />
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <div>
          <h2>Debounce</h2>
          <ul>
            {debounceLog.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Throttle</h2>
          <ul>
            {throttleLog.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Throttle and Debounce</h2>
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
