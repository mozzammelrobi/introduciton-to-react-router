import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>MY website </h1>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
               <NavLink to="/posts">Posts</NavLink>
               
                <Link to="/about">About</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;