import './App.css';
import Home from './Components/Home/home.js';
import  {Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navigation/navbar';
import Registration from './Components/Registration/registration';
import Login from './Components/Login/login';
import Main from './Components/Main/main';
import Collection from './Components/Collection/collection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='registration' element={<Registration />} />
        <Route path='login' element={<Login />} />
        <Route path='main' element={<Main />} />
        <Route path='collection' element={<Collection />} />
        
      </Routes>
    </div>
  );
}

export default App;
