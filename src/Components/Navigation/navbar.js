import {Link} from 'react-router-dom';
import './navbar.css';

export default function NavBar () {
    return (
        <div className="navbar__box">
            <nav className="navbar__content">
                <Link to='/'>Home</Link>
                <Link to='/registration'>Registration</Link>
                <Link to='/login'>Login</Link>
                <Link to='/main'>Main</Link>
                <Link to='/collection'>Collection</Link>
            </nav>
        </div>
    )
}