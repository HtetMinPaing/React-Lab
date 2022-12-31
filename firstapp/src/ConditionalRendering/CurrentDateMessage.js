import Weekends from "./Weekends";
import Weekdays from "./Workdays";
import ErrorMessage from "./ErroeMessage";

function CurrentDateMessage1() {

    const day = new Date().getDay();

    if (day >= 1 && day <= 5) {
        return (<Weekdays />)
    }
    return (<Weekends />)
}

function CurrentDateMessage2(props) {

    if (props.day >= 1 && props.day <= 5) {
        return (<Weekdays />)
    }
    return (<Weekends />)
}

function CurrentDateMessage3({ day }) {

    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);

    let message;

    if (weekday) {
        message = <Weekdays />
    } else if (weekend) {
        message = <Weekends />
    } else {
        message = <ErrorMessage />
    }

    return (message)
}

function LogicalAndExample() {

    const val = prompt('Anything but a 0')

    return (
        <div>
            <h1>Please don't type 0</h1>
            {
                val && <h1>You type {val} and it is not zero, congratulation</h1>
            }
        </div>
    )
}
export { CurrentDateMessage1, CurrentDateMessage2, CurrentDateMessage3, LogicalAndExample }