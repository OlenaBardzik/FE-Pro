import WaiterForm  from './WaiterForm';
import WaiterList from './WaiterList';
import NotFound  from '../NotFound';
import { Route, Routes } from 'react-router-dom';

export default function Waiter () {
    return (
        <Routes>
            <Route path='/' element={<WaiterList />} />
            <Route path='/create' element={<WaiterForm />} />
            <Route path='/:id/edit' element={<WaiterForm />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>  
    )
}