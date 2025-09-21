import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { userApi } from '@/api';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Attempt login
      const loginResponse = await userApi.login(formData);
      
      if (loginResponse.success && loginResponse.token) {
        console.log('Login successful, fetching user details...');
        
        try {
          // Get user details
          const userDetails = await userApi.getProfile();
          console.log('User details:', userDetails);
          
          // Navigate to home page
          navigate('/');
        } catch (profileError) {
          console.error('Error fetching user profile:', profileError);
          // Still navigate to home even if profile fetch fails
          navigate('/');
        }
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(
        error.response?.data?.message ||
        error.message ||
        'Login failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link to="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      {error && (
        <div className="col-12">
          <div className="text-red-1 text-14">{error}</div>
        </div>
      )}

      <div className="col-12">
        <button
          type="submit"
          disabled={loading}
          className={`button py-20 -dark-1 bg-blue-1 text-white w-100 ${loading ? 'opacity-50' : ''}`}
        >
          {loading ? (
            'Signing In...'
          ) : (
            <>Sign In <div className="icon-arrow-top-right ml-15" /></>
          )}
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;
