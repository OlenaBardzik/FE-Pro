import { Space, Button } from 'antd';
import { requestRemoveContact, setContactToEdit } from '../../store/actions/contactAction';

export function getColumns (dispatch, navigate) {
    function onDeleteBtnClick (contact) {
        dispatch(requestRemoveContact(contact.id))
    }

    function onEditBtnClick (contact) {
        dispatch(setContactToEdit(contact));
        navigate(`/contact/${contact.id}/edit`);
    }

    return [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        }, {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        }, {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: 'Actions',
            key: 'actions',
            render: (_, contact) => (
              <Space wrap>
                <Button onClick={() => onEditBtnClick(contact)} type="primary">Edit</Button>
                <Button onClick={() => onDeleteBtnClick(contact)} type="primary" danger>Delete</Button>
              </Space>
            )
        },
    ]
}