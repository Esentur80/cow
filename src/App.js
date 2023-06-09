
import './App.css';
import Header from './componets/Header.js';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Matochnoe from './componets/Matochnoe.js';
import Machen from './componets/Machen.js';
import Menu from './componets/Menu.js';
import Section from './componets/Section';
import Div from './componets/Div';
import Bullsown from './componets/Bullsown';



function App() {
  return (
    <div>

      <BrowserRouter>
   
      <Routes>
      <Route  path='/' element={<Header/>} />
      <Route  path='/matochnoe' element={<Matochnoe/>} />
      <Route  path='/section' element={<Section/>} />
      <Route  path='/bullsown' element={<Bullsown/>} />
      <Route  path='/machen' element={<Machen/>} />
      <Route  path='/div' element={<Div/>} />
      <Route  path='/menu' element={<Menu/>} />
      
      </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;
