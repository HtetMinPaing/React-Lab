import React from 'react';

function Heading(props){
    return(
        <h1>{props.message} at Little Lemon</h1>
    )
}

function Application (){

    const [word,setWord] = React.useState("Eat");

    function clickHandle(){
        setWord("Drink")
    }

    return (
        <div>
            <Heading message={word}/>
            <button onClick={clickHandle} >Click Me</button>
        </div>
    )
}

export default Application;