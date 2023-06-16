import { Row, Col, Table, Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { getColumns } from './getColumns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataForOrder } from '../../store/actions/common';
import { selectOrderLoading, selectOrderListExtended } from '../../store/selectors';


export default function OrderList () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const columns = getColumns(dispatch, navigate);
    const list = useSelector(selectOrderListExtended);
    const loading = useSelector(selectOrderLoading);

    useEffect(() => {
        dispatch(fetchDataForOrder());
    }, [dispatch])

    useEffect(() => {
        console.log(list);
    }, [list])
   
    return (
        <>
            <Row justify="end">
                <Col span={4}>
                    <Button type="primary">
                        <Link to='/orders/create'>Add New Order</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={18}>
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