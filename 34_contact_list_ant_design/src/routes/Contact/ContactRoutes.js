import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';

export default function ContactRoutes() {
    return (
        <>
            <ContactForm />
            <ContactTable />
        </>
        
    )
  }