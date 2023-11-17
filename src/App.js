import Points from "./Points";
import "./App.css";
import Info from "./Info";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [pointed, setPoint] = useState(null);
  const handleClick = (pointed) => {
    console.log(`selected ${pointed}`);
    setPoint(pointed);
  };
  const [result, setResult] = useState(false);
  const changeResult = () => {
    setResult(!result);
  };
  const heading = "How did we do?";
  const desc =
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
  const title = "Thank you!";
  const appreciate =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

  return (
    <div className="App">
      {result ? (
        <Result title={title} description={appreciate} point={pointed} />
      ) : (
        <div>
          <Info heading={heading} description={desc} />
          <Points pointed={pointed} click={handleClick} />
          <button className="submit-btn" onClick={changeResult}>
            SUBMIT
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
