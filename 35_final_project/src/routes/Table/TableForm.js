import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { saveTable, setTableToEdit } from '../../store/actions/tableAction';
import { selectTableToEdit } from '../../store/selectors';

export default function TableForm () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tableToEdit = useSelector(selectTableToEdit);

    function onSubmit (value) {

        const table = {
            ... tableToEdit,
            number: value.number,
        }
      
        dispatch(saveTable(table));
        dispatch(setTableToEdit({}));
        navigate('/tables');
    }

    return (
        <Form 
            initialValues={tableToEdit}
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
                    label="Number"
                    name="number"
                    rules={[
                        {
                            min: 1,
                            message: 'Must be >= 1 symbols',
                        }, {
                            required: true,
                            message: 'Please input Table Number!',
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