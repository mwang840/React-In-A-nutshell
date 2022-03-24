import { useState } from "react";
import React from "react";

export function ClickThroughMeme(): JSX.Element{
    const listOfMemes = ["react-hooks", "state mutation", "titleScreen"]
    const [meme, changeMemes] = useState<string>(listOfMemes[0]);

    return <div></div>;
}
