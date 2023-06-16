import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { saveWaiter, setWaiterToEdit } from '../../store/actions/waiterAction';
import { selectWaiterToEdit } from '../../store/selectors';

const PHONE_TEMPLATE = /^\d{3}(-\d{2}){2}$/;

export default function WaiterForm () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const waiterToEdit = useSelector(selectWaiterToEdit);

    function onSubmit (value) {

        const waiter = {
            ... waiterToEdit,
            firstName: value.firstName,
            phone: value.phone
        }
      
        dispatch(saveWaiter(waiter));
        dispatch(setWaiterToEdit({}));
        navigate('/waiters');
    }

    return (
        <Form 
            initialValues={waiterToEdit}
            onFinish={onSubmit}
            autoComplete="off" 
            labelCol={{
                span: 16,
            }}
            wrapperCol={{
                span: 10,
            }}
            style={{
                maxWidth: 900,
              }}
        >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                        {
                            min: 2,
                            message: 'Must be >= 2 symbols',
                        }, {
                            required: true,
                            message: 'Please input your First Name!',
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
                            message: 'The phone have to match the template xxx-xx-xx',
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
                    offset: 14,
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