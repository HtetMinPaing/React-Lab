import React, { useState } from 'react'
import { useEffect } from 'react'

const Application = () => {

    const [toggle, setToggle] = useState(false)

    const handleChange = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        document.title = toggle ? "Title change":"useEffect example";
    },[toggle])

    // [] for one time, [toggle] for every change, 
  return (
    <div>
        <h1>UseEffect exaample</h1>
        <button onClick={handleChange}>
            Click Toggle
        </button>
        {toggle && <h2>Hello, Welcome</h2>}
    </div>
  )
}

export default Application