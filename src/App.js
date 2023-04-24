import { useState } from 'react';
import './App.css';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Profil from './Components/Profil';

function App() {
  const [users,setUsers] = useState([
    {name : "Alaya", age :27,id : Math.random()},
    {name : "Islem", age :29,id : Math.random()},
    {name : "Iheb", age :23,id : Math.random()},
    {name : "Salem", age :30,id : Math.random()},

  ])
  return (
    <div>
      <NavUser/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listusers' element={<ListUsers users={users}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profil/:id' element={<Profil users={users}/>}/>
      </Routes>
      {/* <ListUsers users={users}/> */}
    </div>
  );
}

export default App;
