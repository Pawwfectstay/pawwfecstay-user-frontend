import apiClient from './config';

// User-related API calls
export const userApi = {
  // Login user
  login: async ({ email, password }) => {
    try {
      const response = await apiClient.post('/api/users/login', { email, password });
      // Store token if returned from API
      if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      await apiClient.post('/api/users/logout');
      // Clear stored token and any user data
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch (error) {
      // Still clear local storage even if API call fails
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      throw error;
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
      const response = await apiClient.get('/api/users/');
      // Store user data if needed
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
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
