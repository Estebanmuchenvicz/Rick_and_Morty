import './App.css';
import Cards from './components/cards/Cards';
import NavBar from './components/navBar/navBar';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import  {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';



function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const email = "esteban@gmail.com";
   const password = "gabriel30";

   const login =(userData)=>{
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }

   }

   useEffect(() => {
      !access && navigate('/');
   },[access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      setCharacters(characters.filter((chart) =>{
         return chart.id !== Number(id);
      }))
   };


   return (

      
      <div className='App'>
         {pathname !== "/" && <NavBar onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>

      
   );
}

export default App;
