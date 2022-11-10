import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Vitrina from './Grids/staticgrid/Vitrina';
import Menu from './Grids/staticgrid/Menu';
import Main from './Grids/dinamycgrid/Main';
import Projects from './Grids/dinamycgrid/Projects';
import SomeChat from './Grids/dinamycgrid/SomeChat';
import About from './Grids/dinamycgrid/About';
import MyProfile from './Grids/dinamycgrid/MyProfile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Vitrina />
        <Menu />
        <div>
          <Routes>
            <Route path='/Main' element={<Main />} />
            <Route path='/Projects' element={<Projects />} />
            <Route exact path='/SomeChat/*' element={<SomeChat />} />
            <Route path='/About' element={<About />} />
            <Route path='/MyProfile' element={<MyProfile />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
