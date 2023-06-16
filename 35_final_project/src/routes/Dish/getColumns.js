import { Space, Button } from 'antd';
import { requestDeleteDish, setDishToEdit } from '../../store/actions/dishAction';

export function getColumns (dispatch, navigate) {
    
    function onDeleteBtnClick (dish) {
        dispatch(requestDeleteDish(dish.id))
    }

    function onEditBtnClick (dish) {
        dispatch(setDishToEdit(dish));
        navigate(`/dishes/${dish.id}/edit`);
    }

    return [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        }, {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },{
            title: 'Actions',
            key: 'actions',
            render: (_, dish) => (
              <Space wrap>
                <Button onClick={() => onEditBtnClick(dish)} type="primary">Edit</Button>
                <Button onClick={() => onDeleteBtnClick(dish)} type="primary" danger>Delete</Button>
              </Space>
            )
        },
    ]
}