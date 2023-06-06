import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import NotFound from './routes/NotFound'
import ContactRoutes from './routes/Contact/ContactRoutes'


function App() {
  const active = ({ isActive }) => isActive ? "active" : ""

  return (
    <div className="App">
      <nav className='navigation'>
        <NavLink to='/' className={active}>Home</NavLink> | {' '}
        <NavLink to='/about' className={active}>About</NavLink> | {' '}
        <NavLink to='/contact' className={active}>Contact List</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact/*' element={<ContactRoutes />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
