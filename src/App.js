import { Link, Route, Routes,} from 'react-router-dom';
import './App.css';
import Iphone from './Components/Iphone';
import Samsung from './Components/Samsung';
import Nokia from './Components/Nokia';
import Motorola from './Motorola';
import Xiaomi from './Components/Xiaomi';
import Poco from './Components/Poco';
import Information from './Components/Information';

function App() { 
  
  return (
    <>
    
    <div className="App">
      <Link to="iphone">Iphone</Link>
      <Link to="samsung">Samsung</Link>
      <Link to="nokia">Nokia</Link>
      <Link to="motorola">Motorola</Link>
      <Link to="xiaomi">Xiaomi</Link>
      <Link to="poco">Poco</Link>               
    </div>
    <Routes>
      <Route path='iphone' element = {<Iphone/>}>
        <Route path=":param" element = {<Information/>}/>
      </Route>
      <Route path='samsung' element = {<Samsung/>}/>
      <Route path='nokia' element = {<Nokia/>}/>
      <Route path='motorola' element = {<Motorola/>}/>
      <Route path='xiaomi' element = {<Xiaomi/>}/>
      <Route path='poco' element = {<Poco/>}/>
    </Routes>
       
    </>
  );
}

export default App;
