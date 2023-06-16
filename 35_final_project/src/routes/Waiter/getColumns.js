import { Space, Button } from 'antd';
import { requestDeleteWaiter, setWaiterToEdit } from '../../store/actions/waiterAction';

export function getColumns (dispatch, navigate) {
    
    function onDeleteBtnClick (waiter) {
        dispatch(requestDeleteWaiter(waiter.id))
    }

    function onEditBtnClick (waiter) {
        dispatch(setWaiterToEdit(waiter));
        navigate(`/waiters/${waiter.id}/edit`);
    }

    return [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            align: 'center'
        }, {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            align: 'center'
        }, {
            title: 'Actions',
            key: 'actions',
            align: 'center',
            render: (_, waiter) => (
              <Space wrap>
                <Button onClick={() => onEditBtnClick(waiter)} type="primary">Edit</Button>
                <Button onClick={() => onDeleteBtnClick(waiter)} type="primary" danger>Delete</Button>
              </Space>
            )
        },
    ]
}