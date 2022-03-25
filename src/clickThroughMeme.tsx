import { useState } from "react";
import { Image } from "react-bootstrap";
import  "./Assets/react-hooks.jpg";
import  "./Assets/state-mutation.jpg";
import  "./Assets/titleScreen.jpg";

export function ClickThroughMeme(): JSX.Element{
    const listOfMemes: string[] = ["react-hooks", "state-mutation", "titleScreen"];
    const [meme, changeMemes] = useState<string>(listOfMemes[0]);
    const source = `./Assets/${meme}.jpg`;

    //Changes the index and picture on click
    const clickMemes= (): void=>{
        const chosenIndex = Math.floor(Math.random() * listOfMemes.length);
        changeMemes(listOfMemes[chosenIndex]);
    };

    return <Image onClick={clickMemes} src={source}/>
}
  