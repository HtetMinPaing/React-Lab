import React from 'react'

const cardstyle={
    background: "#fff",
    boxShadow: "0 .5rem 1rem rgba(0, 0, 0, .1)",
    border: ".1rem solid rgba(0, 0, 0, .3)",
    borderRadius: ".5rem",
    textAAlign: "center",
    flex: "1 1 30rem",
    position: "relative"
}

const containerStyle={
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
}

function Card(props) {
    return(
        <div style={cardstyle}>
            <span>{props.price}</span>
            <img src={props.image}/>
            <h3>{props.name}</h3>
        </div>
    )
}

function Container() {

    const initial = {
        image: "Add file name (png,jpeg,etc)",
        price: "Add Price ($99)",
        name: "Add name",
    }
    const [info, setInfo] = React.useState(initial)

    const [container,setContainer] = React.useState([])

    function HandleEvent() {
        const copy = {
            image: info.image,
            price: info.price,
            name: info.name
        }
        
        const div = <Card key={container.length} image={copy.image} price={copy.price} name={copy.name}/>

        setContainer(container.concat(div))

        console.log(container)
    }

    return (
        <div style={containerStyle}>
            <div style={cardstyle}>
                <label>
                    Image file
                    <input
                        value={info.image}
                        onChange={e => setInfo({ ...info, image: e.target.value })}>
                    </input>
                </label>
                <label>
                    Price
                    <input
                        value={info.price}
                        onChange={e => setInfo({ ...info, price: e.target.value })}>
                    </input>
                </label>
                <label>
                    Name
                    <input
                        value={info.name}
                        onChange={e => setInfo({ ...info, name: e.target.value })}>
                    </input>
                </label>
                <button onClick={HandleEvent}>Add Dish</button>
            </div>
            {container}
        </div>
    )
}

export default Container;