import logo from './logo.svg';
import './App.css';

import { Apple,Bag,Pears } from './PropsAndChildren';

function App() {
  return (
    <div>
       <Bag children={<Apple color="green" number="25" />} />
       <Bag children={<Pears friends="Steve" />} />
    </div>
  );
}

export default App;
