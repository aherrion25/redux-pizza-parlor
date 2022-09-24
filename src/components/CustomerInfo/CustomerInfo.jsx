import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const CustomerInfo = () =>{
    const dispatch = useDispatch();
    const history= useHistory();
    const customerName = useSelector (store => store.customerName);
    // const customerAddress = useSelector (store => store.customerName);


const handleChange = (event) =>{
    dispatch ({type: 'SET_CUSTOMER', payload: event.target.value});
}

    return (
        <>
            <input value={customerName} onChange={handleChange}/>

        </>
    )
}

export default CustomerInfo;

// /*<form action="/action_page.php">
// <label for="fname">First name:</label><br>
// <input type="text" id="fname" name="fname" value="John"><br>
// <label for="lname">Last name:</label><br>
// <input type="text" id="lname" name="lname" value="Doe"><br><br>
// <input type="submit" value="Submit">
// </form>