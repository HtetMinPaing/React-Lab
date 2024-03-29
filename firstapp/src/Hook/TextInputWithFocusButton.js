import { useRef } from "react";

function TestInput(){

    const inputEl = useRef(null)
    const onButtonClick = () =>{
        inputEl.current.focus();
    }

    return(
        <div>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Focus the Input</button>
        </div>
    )
}

export default TestInput