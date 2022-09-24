import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector(store => store.cart);
    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <p style={{width: '100%', textAlign: 'right'}}>
                Items in cart: {cart.length}
            </p>
        </header>
        
        </>
    )
}

export default Header;