import React from 'react'

const MealsContent = React.createContext();

const todaysMeal = ["Baked Potato", "Baked Beans", "Baked Cheese Cake"]

const MealsProvider = ({children}) =>{

    const [meals,setMealsLists] = React.useState(todaysMeal);

    return (
        <MealsContent.Provider value={{meals}}>
            {children}
        </MealsContent.Provider>
    )
}

export const useMealsListsContext = () => React.useContext(MealsContent);

export default MealsProvider;