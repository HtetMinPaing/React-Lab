import { useMealsListsContext } from "../provider/MealsProvider";

const Counter = () =>{

    const { meals } = useMealsListsContext();

    return (
        <div>
            <h3>Number of Meals today : {meals.length}</h3>
        </div>
    )
}

export default Counter;