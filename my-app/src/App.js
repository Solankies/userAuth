
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav/>
<Routes>
<Route path='/' element={<h1> product listing component</h1>}></Route>
<Route path='/add' element={<h1> add listing component</h1>}></Route>
<Route path='/update' element={<h1> update product listing component</h1>}></Route>
<Route path='/logout' element={<h1> logout listing component</h1>}></Route>
<Route path='/profile' element={<h1> profile listing component</h1>}></Route>
<Route path='/signup' element={<Signup/>}></Route>
<Route path='/login' element={<Login/>}></Route>

</Routes>
</BrowserRouter>
<Footer/>
    </div>

  );
}

export default App;
