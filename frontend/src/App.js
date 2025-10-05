
import './App.css';
import {
  BrowserRouter as Main,
  Routes,
  Route,

} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import ViewCart from './components/ViewCart';

function App() {
  return (
  <>
  <Main>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view-cart' element={<ViewCart/>}/>
    </Routes>
  </Main>
  </>
  );
}

export default App;
