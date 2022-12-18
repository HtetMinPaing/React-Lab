import './App.css';
import MealsList from './ContentAPI/consumer/MealsList';
import MealsProvider from './ContentAPI/provider/MealsProvider';
import Counter from './ContentAPI/consumer/Counter';

function App() {
  return (
    <MealsProvider>
      <MealsList/>
      <Counter/>
    </MealsProvider>
  );
}

export default App;
