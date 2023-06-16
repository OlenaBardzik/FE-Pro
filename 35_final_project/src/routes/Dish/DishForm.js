import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { saveDish, setDishToEdit } from '../../store/actions/dishAction';
import { selectDishToEdit } from '../../store/selectors';

export default function DishForm () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dishToEdit = useSelector(selectDishToEdit);

    function onSubmit (value) {

        const dish = {
            ... dishToEdit,
            name: value.name,
            description: value.description,
            price: value.price,
        }
      
        dispatch(saveDish(dish));
        dispatch(setDishToEdit({}));
        navigate('/dishes');
    }

    return (
        <Form 
            initialValues={dishToEdit}
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
                    label="Name"
                    name="name"
                    rules={[
                        {
                            min: 3,
                            message: 'Must be >= 3 symbols',
                        }, {
                            required: true,
                            message: 'Please input your Name of your dish!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            min: 3,
                            message: 'Must be >= 3 symbols',
                        }, {
                            required: true,
                            message: 'Please input your Description!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            min: 1,
                            message: 'Must be >= 1 symbols',
                        }, {
                            required: true,
                            message: 'Please input your Price of your dish!',
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