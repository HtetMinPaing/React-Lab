import './App.css';

import { Header } from './components/Header';
import { Nav } from './components/Nav';

function App() {
  return (
    <html>
      <header>
        <Nav/>
      </header>
      <body>
        <Header/>
      </body>
    </html>
  );
}

export default App;
