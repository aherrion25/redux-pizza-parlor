import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const PizzaItem = ({item}) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch({type: 'ADD_TO_CART', payload: item});
    }

    return (
        <>
            <h2>{item.name}</h2>
            <img style={{width: '400px', height: '250px', objectFit: 'cover'}} src={item.image_path} />
            <br />
            <p>Cost: ${item.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
            <br />
        </>
    )
}

export default PizzaItem;