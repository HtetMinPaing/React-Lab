import React, { useReducer } from 'react'

const Application = () => {
    
    const reducer = (state,action) => {
        if(action.type === "buy_menu") return {money: state.money -10};
        if(action.type === "customer_visit") return {money: state.money +10};
        if(action.type === "celebirity_visit") return {money: state.money + 500};
        return state;
    }

    const initialState = {money: 100};

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Money casher {state.money}</h1>
        <button onClick={()=>dispatch({type: "buy_menu"})}>buy_menu</button>
        <button onClick={()=>dispatch({type: "customer_visit"})}>customer_visit</button>
        <button onClick={()=>dispatch({type: "celebirity_visit"})}>celebirity_visit</button>
    </div>
  )
}

export default Application