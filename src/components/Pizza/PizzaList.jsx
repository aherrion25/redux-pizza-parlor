import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import PizzaItem from './PizzaItem';

const Pizza = () => {
    const [pizzaList, setPizzaList] = useState([]);

    const history = useHistory();
    const pizza = useSelector(store => store.pizzaList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('useEffect - page load');
        getPizza();
    }, [])

    const getPizza = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {
            setPizzaList(response.data);
        }).catch((err) => {
            console.log(err);
        })

    }

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'});
    }

    return (
        <>
            <div>
                <button onClick={clearCart}>Clear Cart</button>
                    
                <h3>Choose your Pizza</h3>
                {
                    pizzaList.map(pizza => (
                        <PizzaItem key={pizza.name} item = {pizza} />
                    ))
                    
                }
                        <button onClick={() => history.push('')}>Next</button>

            </div>
        </>
    );        
}
export default Pizza;