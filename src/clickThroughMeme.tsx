import { useState } from "react";
import { Image } from "react-bootstrap";
import hooks from "./Assets/react-hooks.jpg";
import mutated from"./Assets/state-mutation.jpg";
import title from "./Assets/titleScreen.jpg";
import codeSample from "./Assets/memeCode.jpg";

export function ClickThroughMeme(): JSX.Element{
    const listOfMemes = [hooks, mutated, title];
    const [meme, changeMemes] = useState<number>(0);
    const source = listOfMemes[meme];

    //Changes the index and picture on click
    const clickMemes= (): void=>{
        const chosenIndex = Math.floor(Math.random() * listOfMemes.length);
        changeMemes(chosenIndex);
    };

    return <div>
        <Image className="memezee" onClick={clickMemes} src={source} alt="React memes"/>
        <br></br>
        <Image className="sampleCode" src={codeSample} alt="code for clickThroughMeme"/>
        <p>In the code above the useState we use is one line 10, in this case the state is meme, setState is changeMemes, type is number, and initialValue is 0. On line 14 a function called clickMemes generates a random number between 0 and the length of the listOfMemes on line 9. changeMemes is then called with this number. Finally a return of an image based on the value of meme is returned that when clicked on will call the clickMemes</p>
        </div>
}
  