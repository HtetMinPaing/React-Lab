import React, { useState } from "react";

const Form = (props) =>{

    const [form, setForm] = useState({goal: "", by: ""})

    const formUpdate = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addList(form)
        setForm({goal:"",by:""})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="goal" placeholder="Goal" value={form.goal} onChange={formUpdate}/>
            <input type="text" name="by" placeholder="By" value={form.by} onChange={formUpdate}/>
            <button>Add</button>
        </form>
    )
}

const List = (props) => {
    return(
    <ul>
        {
            props.allLists.map((g)=>
                (<li key={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>)
            )
        }
    </ul>)
}

function Application () {

    const [allLists, setAllLists] = useState([])

    const addGoal = (goal) => {
        setAllLists([...allLists, goal])
    }

    return(
        <div>
            <Form addList={addGoal}/>
            <List allLists={allLists}/>
        </div>
    )
}

export default Application;