import "./App.css";
import {LoginoutButton,LoginoutButtonUpdate} from "./ConditionalComponents/LoginoutButton";

function App() {
  return (
    <LoginoutButtonUpdate isLoggedIn={false}/>
  );
};

/*set NODE_OPTIONS=--openssl-legacy-provider*/
export default App;