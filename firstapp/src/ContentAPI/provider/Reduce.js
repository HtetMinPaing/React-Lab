import { useReducer } from "react";
 
const reducer = (state,action)=>{
    if (action.type === 'ride') return {money:state.money+10}
    if (action.type === 'fuel') return {money:state.money-50}
}

function Application () {

    const initialState = {money: 100}
    const [state,dispatch] = useReducer(reducer,initialState);

}