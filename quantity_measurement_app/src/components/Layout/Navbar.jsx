import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/dashboard" className="navbar-logo">
          <span className="logo-icon">📏</span>
          <span className="logo-text">Quantity Measure</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/history" className="nav-link">History</Link>
        </div>

        {isAuthenticated ? (
          <div className="navbar-user">
            <span className="user-name">{user?.fullName || user?.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-auth-links">
            <Link to="/login" className="auth-btn login-btn">Login</Link>
            <Link to="/register" className="auth-btn register-btn">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
