import './App.css';
import { Header } from './pages/header/Header';
import { Main } from './pages/main/Main';
import { Routes, Route, Link } from 'react-router-dom';
import { Register } from './pages/registration/Registration';

function App() {

  return(
    <Routes>
    <Route path='/' element={
      <>
        <Header/>
        <Main/>
      </>}/>
      <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default App;