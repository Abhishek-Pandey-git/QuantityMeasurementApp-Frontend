import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { API_BASE_URL } from '../../utils/constants';
import './Auth.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    try {
      await register(fullName, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/oauth2/authorization/google`;
  };

  return (
    <div className="auth-container">
      {/* Background shapes are handled by CSS */}
      <div className="auth-bg-shape-1"></div>
      <div className="auth-bg-shape-2"></div>
      
      <div className="auth-card">
        {/* Left: Registration Form */}
        <div className="auth-form-section">
          <div className="auth-brand">
            <div className="auth-brand-icon">📏</div>
            <span className="auth-brand-text">QuantiMeasure</span>
          </div>

          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join us to start precision measuring</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password (min 8 characters)"
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button type="button" onClick={handleGoogleLogin} className="btn-google">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
                <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
                <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z"/>
                <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"/>
              </svg>
              Continue with Google
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{' '}
              <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>

        {/* Right: Measurement Tools Mock */}
        <div className="auth-visual-section">
          <div className="measurement-dashboard">
            {/* Window Header */}
            <div className="dashboard-header">
              <div className="window-control red"></div>
              <div className="window-control yellow"></div>
              <div className="window-control green"></div>
            </div>

            {/* Content */}
            <div className="dashboard-content">
              <div className="dashboard-title">
                <span>🔧</span>
                <span>Measurement Tools</span>
              </div>

              {/* Measurement Operations */}
              <div className="measurement-bars">
                <div className="measurement-bar length" style={{width: '80%'}}></div>
                <div className="measurement-bar weight" style={{width: '60%'}}></div>
                <div className="measurement-bar volume" style={{width: '90%'}}></div>
                <div className="measurement-bar temperature" style={{width: '45%'}}></div>
              </div>

              {/* Conversion Chart */}
              <div className="measurement-chart">
                <div className="measurement-pie">🔄</div>
              </div>

              {/* Operations Icons */}
              <div className="measurement-icons">
                <div className="measurement-icon length">+</div>
                <div className="measurement-icon weight">-</div>
                <div className="measurement-icon volume">×</div>
                <div className="measurement-icon temperature">÷</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
