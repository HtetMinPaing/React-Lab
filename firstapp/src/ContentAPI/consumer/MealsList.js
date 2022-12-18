import { useMealsListsContext } from "../provider/MealsProvider";

const MealsList = () => {

    const { meals } = useMealsListsContext();

    return (
        <div>
            <h1>Meals Lists Using Context API</h1>
            {meals.map((meal,index)=>(
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    )
}

export default MealsList;