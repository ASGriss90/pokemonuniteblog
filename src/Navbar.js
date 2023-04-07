import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1> The Pokemon Unite Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/login" style={{
                    color: "white",
                    backgroundColor: "#0369a0",
                    borderRadius: '8px'
                }}>Login/Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;