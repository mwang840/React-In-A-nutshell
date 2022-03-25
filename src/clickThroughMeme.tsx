import { useState } from "react";
import { Image } from "react-bootstrap";
import hooks from "./assets/react-hooks.jpg";
import mutated from"./assets/state-mutation.jpg";
import title from "./assets/titleScreen.jpg";

export function ClickThroughMeme(): JSX.Element{
    const listOfMemes = [hooks, mutated, title];
    const [meme, changeMemes] = useState<number>(0);
    const source = listOfMemes[meme];

    //Changes the index and picture on click
    const clickMemes= (): void=>{
        const chosenIndex = Math.floor(Math.random() * listOfMemes.length);
        changeMemes(chosenIndex);
    };

    return <Image className="memezee" onClick={clickMemes} src={source} alt="React memes"/>
}
  