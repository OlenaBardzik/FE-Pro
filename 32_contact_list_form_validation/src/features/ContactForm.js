import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { saveContact, setContactToEdit } from '../store/actions/contactAction';
import {DEFAULT_CONTACT} from '../store/reducers/contactReducer';

const PHONE_TEMPLATE = /^\d{3}(-\d{2}){2}$/
const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'First name must be >= 3 symbols')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Last name must be >= 3 symbols')
    .required('Required'),
  phone: Yup.string()
    .matches(PHONE_TEMPLATE, 'The phone must match the template xxx-xx-xx')
    .required('Required'),
});

export default function ContactForm () {
    const contactToEdit = useSelector(state => state.contact.contactToEdit);
    const dispatch = useDispatch();

    const onSubmit = (values, actions) => {

        const contact = {
            ... contactToEdit,
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone
        }
      
        dispatch(saveContact(contact))
        dispatch(setContactToEdit({}))
        actions.resetForm({values: DEFAULT_CONTACT});
    }

    return (
        <Formik
            enableReinitialize
            initialValues={contactToEdit}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
                {props => (
                    <form onSubmit={props.handleSubmit} onReset={props.handleReset}>
                        <div>
                            <input type="text" 
                                    placeholder="First Name" 
                                    name="firstName"
                                    value={props.values.firstName}
                                    onChange={props.handleChange}/>
                            
                            <input type="text" 
                                    placeholder="Last Name" 
                                    name="lastName"
                                    value={props.values.lastName}
                                    onChange={props.handleChange}/>
                            <input type="text" 
                                placeholder="Phone" 
                                name="phone"
                                value={props.values.phone}
                                onChange={props.handleChange}/>
                            <button type="submit">Save Contact</button>
                        </div>
                        <div>
                            <ErrorMessage name="firstName" component='div'/>
                            <ErrorMessage name="lastName" component='div'/>
                            <ErrorMessage name="phone" component='div'/>
                        </div>
                    </form>
                )}
        </Formik>
    )
}