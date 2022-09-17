import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

const Pizza = () => {
    const [pizzaList, setPizzaList] = useState([]);

    const history = useHistory();
    const pizza = useSelector(store => store.name);
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

    return (
        <>
            <div>
                <h3>Choose your Pizza</h3>
                <ul>
                    {pizzaList.map(pizza => <li>{JSON.stringify(pizza)}</li>)}
                </ul>

            </div>
        
        </>
    )
};

export default Pizza;