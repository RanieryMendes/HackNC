
import Home from './components/Home/index'
import { Registration } from './components/Registration';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Login } from './components/Login/index';
import {User} from './components/User/index'
import About from './components/About/index'

function App() {
  return (
      <Router>

        <Routes>

        <Route path="/" element={<Home/>}/>
          
        <Route path="/registration" element={<Registration/>}/>

        <Route path="/login" element={<Login/>} />

        <Route path="/user" element={<User/>}/>

        <Route path="/about" element={<About/>}/>
      
        
      
       
        </Routes>

      </Router>
  );
}

export default App;
