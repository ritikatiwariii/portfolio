import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
      <Routes>
       
        <Route path='/' element={<Home></Home>}>
        
        </Route>
        <Route path='/Contactus' element={<Contact></Contact>}>
        
        </Route>
        
        <Route path='/Project' element={<Project></Project>}>
        
        </Route>
        <Route path='/skills' element={<Skills></Skills>}>
        
        </Route>
        

      </Routes>
    </div>
  );
}

export default App;
