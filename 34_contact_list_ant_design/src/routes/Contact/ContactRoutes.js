import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';

export default function ContactRoutes() {
    return (
        <Routes>
            <Route path='/' element={<ContactTable />} />
            <Route path='/create' element={<ContactForm />} />
            <Route path='/:id/edit' element={<ContactForm />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>  
    )
  }