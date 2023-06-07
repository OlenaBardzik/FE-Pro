import { Row, Col, Table, Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { getColumns } from './getColumns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacs } from '../../store/actions/contactAction';


export default function ContactTable () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const columns = getColumns(dispatch, navigate);
    const list = useSelector(state => state.contact.list);
    const loading = useSelector(state => state.contact.loading);

    useEffect(() => {
        dispatch(fetchContacs())
    }, [dispatch])
   
    return (
        <>
            <Row justify="end">
                <Col span={4}>
                    <Button type="primary">
                        <Link to='/contact/create'>Add New Contact</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={22}>
                    <Table 
                        rowKey={'id'} 
                        columns={columns} 
                        dataSource={list}
                        loading={loading}
                    />
                </Col>
            </Row>
            
        </> 
    )
}