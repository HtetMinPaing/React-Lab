import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function Application() {

    const [fruits,setFruits] = React.useState([
        {fruitName:"Apple", id:1},
        {fruitName:"Orange", id:2},
        {fruitName:"Pear", id:3}
    ])

    let fruit;
    let length = 4;

    function handleChange(e) {
        fruit = e.target.value
    }

    function clickHandle() {
        const newFruit = {fruitName: fruit, id: length};
        length = length +1;
        console.log(fruit+length);
        setFruits([...fruits, newFruit])
    }

    return(
      <div className="App">
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits} />
        <FruitsCounter fruits={fruits} />
        <input value={fruit} onChange={handleChange}></input>
        <button onClick={clickHandle}>Add</button>
      </div>
    )
}

export default Application