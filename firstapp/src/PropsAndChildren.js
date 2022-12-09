function Apple(props){
    return(
        <div>
            <div>
                <h2>SPECIAL Promotion for {props.color} apples!</h2>
                <p>There are {props.number} left.</p>
            </div>
        </div>
    );
}

function Bag(props){
    const bag={
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return(
        <div style={bag}>
            {props.children}
        </div>
    )
}

function Pears(props) {
    return (
        <h2>I don't like pears, but my friend, {props.friend}, does</h2>
    )
    }

export {Apple,Bag,Pears}