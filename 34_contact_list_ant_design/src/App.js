import { Route, Routes, NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './routes/Home';
import About from './routes/About';
import NotFound from './routes/NotFound';
import ContactRoutes from './routes/Contact/ContactRoutes';


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'white',
};

const contentStyle = {
  textAlign: 'center',
  lineHeight: '50px',
};

function App() {
  const items = [
    {
      label: <NavLink to='/'>Home</NavLink>,
      key: 'home',
    }, {
      label: <NavLink to='/about'>About</NavLink>,
      key: 'about',
    }, {
      label: <NavLink to='/contact'>Contact List</NavLink>,
      key: 'contact-list',
    }
  ]

  return (
    <Layout>
    <Layout.Header style={headerStyle} >
      <Menu mode="horizontal" items={items} />
    </Layout.Header>
    <Layout.Content style={contentStyle}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact/*' element={<ContactRoutes />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Layout.Content>
  </Layout>
  );
}

export default App;
