const Child = props =>{
    return(
        <h1>{props.message}</h1>
    )
}

function Application (){
    const date = new Date();
    return(
        <Child message={date.toLocaleDateString()}/>
    )
}

export default Application;