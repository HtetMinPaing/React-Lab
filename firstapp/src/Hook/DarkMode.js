import React from 'react'

function DarkMode(){

    const [darkModeOn,setDarkModeOn] = React.useState(false);

    function handleEvent(){
        setDarkModeOn(!darkModeOn)
    }

    return(
        <div>
            {darkModeOn ? <Status status="Dark"/> : <Status status="Light"/>}
            <button onClick={handleEvent}>
                {darkModeOn ? "Turn Light" : "Turn Dark"}
            </button>
        </div>
    )
}

function Status (props) {
    return(
        <h1>{props.status} is now ON</h1>
    )
}

export {DarkMode};