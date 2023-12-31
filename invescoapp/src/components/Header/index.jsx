import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router'
import { CartContext } from "../../providers/CartProvider";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/AuthReducer";
const Header = (props) => {
    const auth = useSelector(x => x.auth);
    //to perform click based navigation
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const{cartItems} = useContext(CartContext)
    const cart = useSelector(x => x.cart);
    const cartItems = cart.cartItems;

    const buildNav = () => {
        let navItems = props.config.navItems
        if (auth.isAuthenticated) {
            navItems = props.config.navItems.filter(x => x.index > 3)
        } else {
            navItems = props.config.navItems.filter(x => x.index <= 3)
        }
        return navItems.map((item, index) => {
            if (item.subItems && item.subItems.length > 0) {
                return <li key={item.name} className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false" >
                        {item.name}
                    </a>
                    <ul className="dropdown-menu">
                        {item.subItems.map((sub, index) => {
                            return (
                                <li key={sub.name}><a className="dropdown-item" href="#" onClick={e => {
                                    navigate(sub.url);
                                }}>{sub.name}</a></li>
                            )
                        })}
                    </ul>
                </li>
            } else {

                return (
                    <li className="nav-item" key={item.index}>
                        <a className="nav-link" href="#" onClick={e => {
                            if (item.name == 'Logout') {
                                dispatch(logout());
                                navigate("/login");
                            }
                            else {
                                navigate(item.url);
                            }
                        }} >{item.name}</a>
                    </li>
                )
            }
        });
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"
                    href="#">{props.config.name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {buildNav()}

                    </ul>
                    <button className="btn btn-secondary">Cart-{cartItems.length}</button>
                </div>
            </div>
        </nav>
    )
};

export default Header;