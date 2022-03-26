import React, { useState } from "react";
import { Button } from "react-bootstrap";
import code from "./Assets/CounterCode.jpg";

export function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      {" "}
      Your current number is at: {counter}
      <Button onClick={() => setCounter(counter + 1)}>Add One</Button>
      <Button onClick={() => setCounter(counter - 1)}>Subtract One</Button>
      <br></br>
      <img className="sampleCode" src={code} alt="code for Counter" />
      <br></br>
      <p>
        On line 5 the useState is written in this case the state is counter, the
        setState is setCounter, the type is a number, and the intial value is 0.
        The next line then displays what the state currently is. Finally the two
        buttons update the state onClick by calling setCounter(counter+1 or
        counter-1 depending on the button).
      </p>
    </div>
  );
}
