import { useState, useEffect, useRef } from "react";

export default function Application() {

  const [day, setDay] = useState("Monday");

  const prevDay = usePrevious(day);

  const nextDay = useNext(day);

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
        {
          nextDay && (
            <span>Next work day was: {nextDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}

function usePrevious(val) {
    const ref = useRef()
    useEffect(()=>{
        ref.current = val;
    },[val])
    return ref.current;
}

function useNext(val) {
    const ref = useRef()
    useEffect(()=>{
        if (val === "Monday") {
            ref.current = "Tuesday";
          } else if (val === "Tuesday") {
            ref.current = "Wednesday";
          } else if (val === "Wednesday") {
            ref.current = "Thursday";
          } else if (val === "Thursday") {
            ref.current = "Friday";
          } else if (val === "Friday") {
            ref.current = "Monday";
          }
    },[val])
    return ref.current;
}