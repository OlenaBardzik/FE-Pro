import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { saveOrder, setOrderToEdit } from '../../store/actions/orderAction';
import { selectDishList, selectOrderToEdit, selectTableList, selectWaiterList } from '../../store/selectors';
import { fetchDataForOrder } from '../../store/actions/common';

export default function OrderForm () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const orderToEdit = useSelector(selectOrderToEdit);
    const tableList = useSelector(selectTableList);
    const waiterList = useSelector(selectWaiterList);
    const dishList = useSelector(selectDishList);

    useEffect(() => {
        dispatch(fetchDataForOrder())
    }, [dispatch])

    function onSubmit (value) {

        const order = {
            ... orderToEdit,
            tableId: value.tableId,
            waiterId: value.waiterId,
            dishes: value.dishes.map(dish => {
                return {
                    id: Date.now(),
                    dishId: dish.id,
                    count: Number(dish.count)
                }
            }),
        }
      
        dispatch(saveOrder(order));
        dispatch(setOrderToEdit({}));
        navigate('/orders');
    }

    return (
        <Space align='center'>
            <Form 
                initialValues={orderToEdit}
                onFinish={onSubmit}
                autoComplete="off" 
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 10,
                }}
                style={{
                    maxWidth: 900,
                }}
            >
                <Form.Item
                    label="Table"
                    name="tableId"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Table Number!',
                        },
                    ]}
                >
                    <Select
                        showSearch
                        style={{
                            width: 300,
                        }}
                        placeholder="Search to Select"
                        optionFilterProp="number"
                        filterOption={(input, option) => (option?.label.toString() ?? '').includes(input)}
                        filterSort={(optionA, optionB) => optionA - optionB}
                        options={tableList.map(table => { return {value: table.id, label: table.number}})}
                    />
                </Form.Item>
                <Form.Item
                    label="Waiter"
                    name="waiterId"
                    rules={[
                        {
                            required: true,
                            message: 'Please input waiter name!',
                        },
                    ]}
                >
                    <Select
                        showSearch
                        style={{
                            width: 300,
                        }}
                        placeholder="Search to Select"
                        optionFilterProp="name"
                        filterOption={(input, option) => (option?.label.toString() ?? '').includes(input)}
                        filterSort={(optionA, optionB) => optionA - optionB}
                        options={waiterList.map(waiter => { return {value: waiter.id, label: waiter.firstName}})}
                    />
                </Form.Item>
                <Form.Item 
                    label="Dishes" 
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Dish!',
                        },
                    ]}>
                    <Form.List 
                    name="dishes">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space
                                key={key}
                                style={{
                                    display: 'flex',
                                    marginBottom: 2,
                                }}
                                align="baseline"
                            >
                            <Form.Item
                                {...restField}
                                name={[name, 'id']}
                                rules={[
                                {
                                    required: true,
                                    message: 'Missing dish name',
                                },
                                ]}
                            >
                                <Select
                                    style={{
                                        width: 200,
                                    }}
                                    placeholder="Search to Select"
                                    optionFilterProp="label"
                                    filterOption={(input, option) => (option?.label.toString() ?? '').includes(input)}
                                    filterSort={(optionA, optionB) => optionA - optionB}
                                    options={dishList.map(dish => { return {value: dish.id, label: dish.name}})}
                                />
                            </Form.Item>
                            <Form.Item
                                {...restField}
                                name={[name, 'count']}
                                rules={[
                                {
                                    required: true,
                                    message: 'Missing count',
                                },
                                ]}
                            >
                                <Input 
                                    placeholder="Count" 
                                    style={{
                                        width: 80,
                                    }}/>
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add field
                            </Button>
                        </Form.Item>
                        </>
                    )}
                    </Form.List>
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
        </Space>
    )
}