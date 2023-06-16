import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import {Layout,  Menu } from 'antd';
import Waiter from './routes/Waiter';
import Table from './routes/Table';
import Dish from './routes/Dish';
import Order from './routes/Order';
import NotFound from './routes/NotFound';

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
};

function App() {
  const items = [
    {
      label: <NavLink to='/orders'>Orders</NavLink>,
      key: 'order',
    }, {
      label: <NavLink to='/waiters'>Waiters</NavLink>,
      key: 'waiter',
    }, {
      label: <NavLink to='/tables'>Tables</NavLink>,
      key: 'table',
    }, {
      label: <NavLink to='/dishes'>Dishes</NavLink>,
      key: 'dishes',
    }
  ]

  return (
    <Layout>
      <Layout.Header style={headerStyle}>
        <Menu mode="horizontal" items={items}/>
      </Layout.Header>
      <Layout.Content style={contentStyle}>
        <Routes>
          <Route path="/" element={<Navigate to="/waiter" />}/>
          <Route path='/orders/*' element={<Order />}/>
          <Route path='/waiters/*' element={<Waiter />} />
          <Route path='/tables/*' element={<Table />} />
          <Route path='/dishes/*' element={<Dish />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout.Content>
    </Layout>
  );
}

export default App;
