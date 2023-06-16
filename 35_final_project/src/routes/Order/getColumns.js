import { Space, Button } from 'antd';
import { requestDeleteOrder, setOrderToEdit } from '../../store/actions/orderAction';

export function getColumns (dispatch, navigate) {
    
    function onDeleteBtnClick (order) {
        dispatch(requestDeleteOrder(order.id))
    }

    function onEditBtnClick (order) {
        dispatch(setOrderToEdit(order));
        navigate(`/orders/${order.id}/edit`);
    }

    return [
        {
            title: 'Table',
            key: '[id]',
            dataIndex: 'table',
            render: (_, record) => record.table?.number
        }, {
            title: 'Waiter',
            key: '[id]',
            dataIndex: 'waiter',
            render: (_, record) => record.waiter?.firstName
        }, {
            title: 'Dishes',
            key: '[id]',
            dataIndex: 'dishes',
            render: (_, record) => (
                record.dishes.map(dishItem => {
                    return (
                        <div style={{margin: "10px 14px"}}>
                            <div>Dish name: {dishItem.dish?.name}</div>
                            <div>
                                <span>Price: {dishItem.dish?.price} | </span>
                                <span>Count: {dishItem.count} | </span>
                                <span>Sum: {dishItem.count * dishItem.dish?.price}</span>
                            </div>
                        </div>
                    )
                })
            )
        }, {
            title: 'Total',
            key: 'total',
            dataIndex: 'dishes',
            render: (_, record) => (
                record.dishes.reduce((total, dishItem) => total + dishItem.dish?.price * dishItem.count, 0)
            )
        }, {
            title: 'Actions',
            key: 'actions',
            render: (_, order) => (
              <Space wrap>
                <Button onClick={() => onEditBtnClick(order)} type="primary">Edit</Button>
                <Button onClick={() => onDeleteBtnClick(order)} type="primary" danger>Delete</Button>
              </Space>
            )
        },
    ]
}