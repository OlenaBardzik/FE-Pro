import { Row, Col, Table, Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { getColumns } from './getColumns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTables } from '../../store/actions/tableAction';
import { selectTableList, selectTableLoading } from '../../store/selectors';


export default function TableList () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const columns = getColumns(dispatch, navigate);
    const list = useSelector(selectTableList);
    const loading = useSelector(selectTableLoading);

    useEffect(() => {
        dispatch(fetchTables())
    }, [dispatch])
   
    return (
        <>
            <Row justify="end">
                <Col span={4}>
                    <Button type="primary">
                        <Link to='/tables/create'>Add New Table</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={10}>
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