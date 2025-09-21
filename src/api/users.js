import apiClient, { setAuthToken } from './config';

// User-related API calls
export const userApi = {
  // Login user
  login: async ({ email, password }) => {
    try {
      console.log('Sending login request with:', { email, password });
      
      const response = await apiClient.post('/api/users/login', {
        email,
        password
      });
      
      console.log('Raw API Response:', response);
      
      // Check if we have a token in the response
      const token = response?.token || response?.data?.token;
      
      if (token) {
        console.log('Token received, setting auth token');
        setAuthToken(token);
        return { success: true, token };
      } else {
        console.log('No token in response:', response);
        throw new Error('No token received from server');
      }
    } catch (error) {
      console.error('Login failed:', error.response || error);
      setAuthToken(null);
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      // Token will be automatically added by the interceptor
      console.log('Logging out with token:', sessionStorage.getItem('token'));
      const response = await apiClient.post('/api/users/logout');
      console.log('Logout response:', response);
      return response;
    } finally {
      // Always clear tokens and user data
      console.log('Clearing session data...');
      setAuthToken(null);
      sessionStorage.removeItem('user');
    }
  },

  // Register user
  register: async ({ firstname, lastname, email, phone, password }) => {
    try {
      const response = await apiClient.post('/api/users/register', {
        firstname,
        lastname,
        email,
        phone,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get user profile
  getProfile: async () => {
    try {
      console.log('Fetching user profile...');
      const response = await apiClient.get('/api/users');
      console.log('User profile response:', response);
      
      // Store user data in session
      if (response.data) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      throw error;
    }
  },

  // Update user profile
  updateProfile: async (profileData) => {
    try {
      return await apiClient.put('/users/profile', profileData);
    } catch (error) {
      throw error;
    }
  },
};
