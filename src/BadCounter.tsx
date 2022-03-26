import { Button } from "react-bootstrap";
import code from "./Assets/BrokenCounter.jpg";

export function BadCounter(): JSX.Element{
    let counter: number = 0;
    function addOne(){
        counter += 1;
    }
    function subOne(){
        counter -= 1;
    }
    return <div>Your current number is at: {counter}
    <Button onClick={addOne}>Add One</Button>
    <Button onClick={subOne}>Subtract One</Button>
    <br></br>
    <img className="sampleCode" src={code} alt="code for BadCounter"/>
    <br></br>
    <p>On line 5 we declare a local variable counter that is initialized to 0. Two functions are declared below it, one the adds one to counter, and one that subtracts one from counter. These functions are called when their corresponding button is clicked. However this code will not work. This is because when the Component is called it does not remember the previous value of counter and instead initializes it back to 0.</p>
    </div>
}