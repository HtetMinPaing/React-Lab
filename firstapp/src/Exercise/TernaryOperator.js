function Example(){
    return(
        <div>
            <h1>{Math.random()>=0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
}

let name = 'bob';
name = 'bob' ? console.log("Hi, BOB") : console.log("Who are you");

function Example2 (){
    return(
        <div>
            <h1>
                Random numbers from 0 to 10 : {" "}
                {(Math.floor(Math.random()*10)+1)}
            </h1>
        </div>
    );
}

function Example3(){

    const getRandom = () => { 
        return(Math.floor(Math.random()*10)+1)
    }

    return(
        <div>
            <h1>Random numbers in range between 0 to 10 : {""} {getRandom()}</h1>
        </div>
    )
}

function Expression(){
    const bool = true;
    const str1 = 'just';

    function Example(props){
        return(
            <div>
                <h2>The value of toggleBoolean prop is:{props.toogleBoolean}</h2>
                <p>The value of math prop is:{props.math}</p>
                <p>The value of string prop is:{props.string}</p>
            </div>
        )
    }

    function Application(){
        return(
            <div>
                <Example
                toogleBoolean={!bool}
                math={(30/10)/2}
                string={str1+' Do '+'it!'}
                />
            </div>
        )
    }

    return(
        Application()
    )
}
export {Example,Example2,Example3,Expression}
/*
    <div>
      <Example/>
      <Example2/>
      <Example3/>
      <Expression/>
    </div>
*/