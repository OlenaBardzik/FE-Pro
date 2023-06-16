import TableForm from './TableForm';
import TableList from './TableList';
import NotFound from '../NotFound';
import { Route, Routes } from 'react-router-dom';

export default function Table () {
    return (
        <Routes>
            <Route path='/' element={<TableList />} />
            <Route path='/create' element={<TableForm />} />
            <Route path='/:id/edit' element={<TableForm />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>  
    )
}