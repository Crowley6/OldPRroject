import './App.css';
import Header from './Header.js';
import Cont1 from './container1';

const App = () => {
  return (
  <div className="App">
    <div>
      <Header />
    </div>
    <div>
      <Cont1 />
    </div>
    
      <ul><caption>Изученный материал</caption>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>JQUERY</li>
        <li>BOOTSTRAP</li>
      </ul>
  </div>
  );
}

export default App;
