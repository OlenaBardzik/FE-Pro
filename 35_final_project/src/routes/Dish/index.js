import DishForm from './DishForm';
import DishList from './DishList';
import NotFound from '../NotFound';
import { Route, Routes } from 'react-router-dom';

export default function Dish () {
    return (
        <Routes>
            <Route path='/' element={<DishList />} />
            <Route path='/create' element={<DishForm />} />
            <Route path='/:id/edit' element={<DishForm />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>  
    )
}