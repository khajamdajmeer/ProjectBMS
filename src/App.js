import './App.css';
import LoginPage from './Components/LoginPage';
import { HashRouter,Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SignInPage from './Components/SignInPage';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
   <>
   <HashRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignInPage/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Routes>
   </HashRouter>
   </>
  );
}

export default App;
