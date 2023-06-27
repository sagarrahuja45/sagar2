import { useRef } from "react";

export default function ExRef(){
    let ref = useRef(0);

    function handleClick(){
        ref.current = ref.current+1;
        alert("you clicked " +ref.current +" times");
    }

    return(
        <>
        <button onClick={handleClick}>Click me!</button>
        </>
    )
}