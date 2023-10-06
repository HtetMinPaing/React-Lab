import React from 'react'
import { useState } from 'react'
import './Application.css'

const Application = () => {

    const [review, setReview] = React.useState(0);
    const [comment, setComment] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Successfully Submit");
        setComment("");
        setReview(0);
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1 className="header">Feedback Form</h1>
        <fieldset>
            <label htmlFor='review'>Rating: {review}</label>
            <input id='review' type='range' min={0} max={10} value={review} onChange={e => {setReview(e.target.value)}}></input>
        </fieldset>
        <fieldset>
            <label htmlFor='comment'>Comment:</label>
            <textarea id='comment' value={comment} onChange={e => {setComment(e.target.value)}}></textarea>
        </fieldset>
        <button className="button" type='submit'>Submit</button>
    </form>
  )
}

export default Application