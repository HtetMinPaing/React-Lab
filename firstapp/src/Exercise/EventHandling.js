function Click(){

    const clickHandler = 
    () => console.log("Clicked");

    return(
        <button onClick={clickHandler}>Clicked Me</button>
    )

}

function Mouse(){

    const mouseOver = 
    () => console.log("Mouse Over");

    return(
        <button onMouseOver={mouseOver}>Over Me</button>
    )

}

export {Click,Mouse}

/*  <div>
        <Click/>
        <Mouse/>
    </div> 
*/