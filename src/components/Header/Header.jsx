import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>MY website </h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;