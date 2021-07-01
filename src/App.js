/* global chrome */
import { useEffect, useState } from "react";

const style = {
  space1: {
    marginBottom: "10px"
  },
  radioTitle: {
    marginBottom: "20px",
    fontSize: "15px"
  },
  space3: {
    marginBottom: "30px"
  },
  gridCol2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  },
  radioLabel: {
    paddingLeft: "10px",
    fontSize: "15px"
  },
  flexCenter: {
    display: "flex",
    alignItems: "center"
  },
  mp0: {
    margin: "0",
    padding: "0"
  }
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

function App() {
  const [zenMode, setZenMode] = useLocalStorage('zen', true);
  const [darkMode, setDarkMode] = useLocalStorage('dark', false);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { type: "zen", value: zenMode });
    });
  }, [zenMode]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { type: "dark", value: darkMode });
    });
  }, [darkMode]);

  const handleZenModeToggle = (e) => {
    const { value } = e.target;
    setZenMode(value === "ON");
  }

  const handleDarkModeToggle = (e) => {
    const { value } = e.target;
    setDarkMode(value === "ON");
  }

  return (
    <div className="App">
      <form>
        <div style={style.space3}>
          <div style={style.radioTitle}>{"Default Mode"}</div>
          <div style={style.gridCol2}>
            <div style={style.flexCenter}>
              <input
                style={style.mp0}
                type="radio"
                id="zen"
                name="toggle_default"
                value="ON"
                onChange={handleZenModeToggle}
                checked={zenMode}
              />
              <label for="zen" style={style.radioLabel}>Zen</label>
            </div>
            <div style={style.flexCenter}>
              <input
                style={style.mp0}
                type="radio"
                id="normal"
                name="toggle_default"
                value="OFF"
                onChange={handleZenModeToggle}
                checked={!zenMode}
              />
              <label for="normal" style={style.radioLabel}>Normal</label>
            </div>
          </div>
        </div>
        <div style={style.space3}>
          <div style={style.radioTitle}>{"Dark Mode"}</div>
          <div style={style.gridCol2}>
            <div style={style.flexCenter}>
              <input
                style={style.mp0}
                type="radio"
                id="on"
                name="toggle_dark_mode"
                value="ON"
                onChange={handleDarkModeToggle}
                checked={darkMode}
              />
              <label for="on" style={style.radioLabel}>On</label>
            </div>
            <div style={style.flexCenter}>
              <input
                style={style.mp0}
                type="radio"
                id="off"
                name="toggle_dark_mode"
                value="OFF"
                onChange={handleDarkModeToggle}
                checked={!darkMode}
              />
              <label for="off" style={style.radioLabel}>Off</label>
            </div>
          </div>
        </div>
      </form>
      <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>Press CTRL/CMD + I to toggle between zen mode</p>
    </div>
  );
}

export default App;
