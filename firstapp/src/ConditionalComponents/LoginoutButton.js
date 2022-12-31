import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useState } from 'react'

function LoginoutButton(props) {

    const isLoggedIn = props.isLoggedIn;

    let button;

    if(isLoggedIn){
        button = <LogoutButton/>
    } else {
        button = <LoginButton/>
    }

    return (
        <button className="button">
            {button}
        </button>
    )
}

function LoginoutButtonUpdate (props) {

    const [isLoggedIn,setLoggedIn] = useState(props.isLoggedIn);

    function ClickEvent() {
        setLoggedIn(!isLoggedIn)
    }

    return (
        <div className="button" onClick={ClickEvent}>
            {isLoggedIn? <LogoutButton/> : <LoginButton/>}
        </div>
    )
} 

export {LoginoutButton, LoginoutButtonUpdate};