import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Vitrina from './Grids/staticgrid/Vitrina';
import Menu from './Grids/staticgrid/Menu';
import Main from './Grids/dinamycgrid/Main';
import Projects from './Grids/dinamycgrid/Projects';
import SomeChat from './Grids/dinamycgrid/SomeChat';
import About from './Grids/dinamycgrid/About';
import MyProfile from './Grids/dinamycgrid/MyProfile';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Vitrina />
        <Menu />
        <div>
          <Routes>
            <Route path='/Main' element={<Main dcID2={props.dcID.MainBack} />} />
            <Route path='/Projects' element={<Projects />} />
            <Route exact path='/SomeChat/*' element={<SomeChat dcID2={props.dcID} addPost={props.addPost} />} />
            <Route path='/About' element={<About />} />
            <Route path='/MyProfile' element={<MyProfile profileInfo={props.profileInfo.MyProfile} addnewProfile={props.addnewProfile} addnewProfileText={props.addnewProfileText} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
