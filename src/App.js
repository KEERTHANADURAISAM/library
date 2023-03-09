import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Allbooks from './components/Allbooks';
import Editbooks from './components/Editbooks';
import View from './components/View';
import StudAllbooks from './components/StudAllbooks';
import Addbooks from './components/Addbooks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/home/dashboard' element={<Dashboard/>}></Route>
  <Route path='/allbooks' element={<Allbooks/>}></Route>
  <Route path='/books/edit/:id' element={<Editbooks/>}></Route>
  <Route path='/books/view/:id' element={<View/>}></Route>
  <Route path='/studentviewbooks' element={<StudAllbooks/>}></Route>
  <Route path='/addbooks' element={<Addbooks/>}></Route>

      
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
