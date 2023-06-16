import { Space, Button } from 'antd';
import { requestDeleteTable, setTableToEdit } from '../../store/actions/tableAction';

export function getColumns (dispatch, navigate) {
    
    function onDeleteBtnClick (table) {
        dispatch(requestDeleteTable(table.id))
    }

    function onEditBtnClick (table) {
        dispatch(setTableToEdit(table));
        navigate(`/tables/${table.id}/edit`);
    }

    return [
        {
            title: 'Number',
            dataIndex: 'number',
            key: 'number',
            align: 'center',
        }, {
            title: 'Actions',
            key: 'actions',
            align: 'center',
            render: (_, table) => (
              <Space wrap>
                <Button onClick={() => onEditBtnClick(table)} type="primary">Edit</Button>
                <Button onClick={() => onDeleteBtnClick(table)} type="primary" danger>Delete</Button>
              </Space>
            )
        },
    ]
}