import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppGrid1 from './Grids/AppGrid1';
import AppGrid2 from './Grids/AppGrid2';
import AppGrid3 from './Grids/AppGrid3';
import AppGrid4 from './Grids/AppGrid4';
import AppGrid5 from './Grids/AppGrid5';
import AppGrid6 from './Grids/AppGrid6';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AppGrid1 />
        <AppGrid2 />
        <div>
          <Routes>
          <Route path='/AppGrid3' element={<AppGrid3/>}/>
          <Route path='/AppGrid4' element={<AppGrid4/>}/>
          <Route exact path='/AppGrid5/*' element={<AppGrid5/>}/>
          <Route path='/AppGrid6' element={<AppGrid6/>}/>
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
