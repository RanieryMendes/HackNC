
import Home from './components/Home/index'
import { Registration } from './components/Registration';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Login } from './components/Login/index';

function App() {
  return (
      <Router>

        <Routes>

        <Route path="/" element={<Home/>}/>
          
        <Route path="/registration" element={<Registration/>}/>

        <Route path="/login" element={<Login/>} />
      
        
      
       
        </Routes>

      </Router>
  );
}

export default App;
