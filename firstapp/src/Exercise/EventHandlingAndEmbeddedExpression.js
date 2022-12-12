function Example1() {
    return (
        <button onClick={function () { console.log("Example-1") }}>
            An inline anonymous ES5 function event handler
        </button>
    )
}

function Example2(){
    return(
        <button onClick={()=>{console.log("Example-2")}}>
             An inline anonymous ES6 function event handler
        </button>
    )
}

function Example3(){
    function third (){
        console.log("Example-3")
    }
    return(
        <button onClick={third}>
            using a separate function declaration
        </button>
    )
}

function Example4(){
    const fourth = () => console.log("Example-4")

    return(
        <button onClick={fourth}>
            using a separate function expression
        </button>
    )
}

function Btn(){
    return(
        <div>
            <Example1/>
            <Example2/>
            <Example3/>
            <Example4/>
        </div>
    )
}

export default Btn;