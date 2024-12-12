import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import AddUser from './component/user/AddUser';
import EditUser from './component/user/EditUser';
import ViewUser from './component/user/ViewUser';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/layout/Nav';

function App() {
  return (
    <Router>
      <div className="pt-20" >
        <Nav></Nav>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Contact' element={<Contact/>} />   
        <Route exact path='/About' element={<About/>} />  
        <Route exact path='/Users/add' element={<AddUser/>} /> 
        <Route exact path='/Users/edit/:userId' element={<EditUser/>} /> 
        <Route exact path='/Users/view/:userId' element={<ViewUser/>} /> 
        <Route  path="*" element={<NotFound/>}/> 
       
      </Routes>
    </div>
    </Router>
    
  )
}

export default App
