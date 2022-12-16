import {useState} from 'react';

function InputComponent () {

    const [inputText,setText] = useState("Hello!");

    function handleChange (e){
        setText(e.target.value);
    }

    return(
        <div>
            <input value={inputText} onChange={handleChange}></input>
            <p>You type : {inputText}</p>
            <button onClick={()=>setText("Hello!")}>Reset</button>
        </div>
    )
}

export default InputComponent