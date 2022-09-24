import { useDispatch } from "react-redux";

const PizzaItem = ({item}) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch({type: 'ADD_TO_CART', payload: item});
    }

    return (
        <>
            <h2>{item.name}</h2>
            <br />
            <p>Cost: ${item.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        
        </>
    )
}

export default PizzaItem;