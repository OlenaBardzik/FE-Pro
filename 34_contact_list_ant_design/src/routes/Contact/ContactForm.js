import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { saveContact, setContactToEdit } from '../../store/actions/contactAction';

const PHONE_TEMPLATE = /^\d{3}(-\d{2}){2}$/;

export default function ContactForm () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contactToEdit = useSelector(state => state.contact.contactToEdit);

    const onSubmit = (value) => {

        const contact = {
            ... contactToEdit,
            firstName: value.firstName,
            lastName: value.lastName,
            phone: value.phone
        }
      
        dispatch(saveContact(contact));
        dispatch(setContactToEdit({}));
        navigate('/contact');
    }

    return (
        <Form 
            initialValues={contactToEdit}
            onFinish={onSubmit}
            autoComplete="off" 
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 10,
            }}
        >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                        {
                            min: 3,
                            message: 'Must be >= 3 symbols',
                        }, {
                            required: true,
                            message: 'Please input your First Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                        {
                            min: 3,
                            message: 'Must be >= 3 symbols',
                        }, {
                            required: true,
                            message: 'Please input your Last Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            pattern: PHONE_TEMPLATE,
                            message: 'The phone must match the template xxx-xx-xx',
                        }, {
                            required: true,
                            message: 'Please input your Phone!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 10,
                  }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
        </Form>
    )
}