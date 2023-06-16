import { Row, Col, Table, Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { getColumns } from './getColumns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWaiters } from '../../store/actions/waiterAction';
import { selectWaiterList, selectWaiterLoading } from '../../store/selectors';


export default function WaiterList () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const columns = getColumns(dispatch, navigate);
    const list = useSelector(selectWaiterList);
    const loading = useSelector(selectWaiterLoading);

    useEffect(() => {
        dispatch(fetchWaiters())
    }, [dispatch])
   
    return (
        <>
            <Row justify="end">
                <Col span={4}>
                    <Button type="primary">
                        <Link to='/waiters/create'>Add New Waiter</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={12}>
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