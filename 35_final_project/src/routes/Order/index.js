import OrderForm from './OrderForm';
import OrderList from './OrderList';
import NotFound from '../NotFound';
import { Route, Routes } from 'react-router-dom';

export default function Order () {
    return (
        <Routes>
            <Route path='/' element={<OrderList />} />
            <Route path='/create' element={<OrderForm />} />
            <Route path='/:id/edit' element={<OrderForm />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>  
    )
}