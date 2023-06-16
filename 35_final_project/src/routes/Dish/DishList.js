import { Row, Col, Table, Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { getColumns } from './getColumns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../store/actions/dishAction';
import { selectDishList, selectDishLoading } from '../../store/selectors';


export default function DishList () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const columns = getColumns(dispatch, navigate);
    const list = useSelector(selectDishList);
    const loading = useSelector(selectDishLoading);

    useEffect(() => {
        dispatch(fetchDishes())
    }, [dispatch])
   
    return (
        <>
            <Row justify="end">
                <Col span={4}>
                    <Button type="primary">
                        <Link to='/dishes/create'>Add New Dish</Link>
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