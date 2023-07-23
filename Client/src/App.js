import './App.css';
import Cards from './components/cards/Cards';
import NavBar from './components/navBar/navBar';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import  {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';
import Footer from './components/Footer/Footer';
import { getFav } from './redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Register from './components/Register/Register';
import axios from 'axios';
axios.defaults.baseURL = 'https://rickandmorty-production-bd88.up.railway.app'



function App() {
   const dispatch = useDispatch()
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const navigate = useNavigate();
   const access = useSelector((state)=>state.isLoggedIn)

   async function login(userData) {
      try {
         
         const { email, password } = userData;
         const URL = '/rickandmorty/login';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
            const { access, userId } = data;
    
            if (access) {
              // Guarda el userId y el token en localStorage
              localStorage.setItem('userId', userId);
              localStorage.setItem('token', 'EL_TOKEN_JWT_RECIBIDO');
        
              dispatch(getFav(userId))
              // Redirecciona al usuario a la página /home
              navigate('/home');
            } else {
              console.log('Credenciales incorrectas');
            }
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   },[access]);

   async function onSearch(id) {
      try {    
         const  response  = await axios(`/rickandmorty/character/${id}`)
         const data = response.data;
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
      } catch (error) {
         console.log(error);
      }
      
   };

   const onClose = (id) => {
      setCharacters(characters.filter((chart) =>{
         return chart.id !== Number(id);
      }))
   };

   const Random = () => {
      let randomId = Math.floor(Math.random() * 826);
      onSearch(randomId);
    };


  


   return (

      
      <div className='App'>
         {pathname !== "/" && pathname !=='/register' && <NavBar onSearch={onSearch} Random={Random}/>}

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         {pathname !== "/" && pathname !=='/register' &&<Footer/>}
      </div>

      
   );
}

export default App;
