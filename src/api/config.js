import axios from 'axios';

// API configuration
export const API_BASE_URL = 'https://staging.pawwfectstay.com';

// Token management
export const setAuthToken = (token) => {
  if (token) {
    sessionStorage.setItem('token', token);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    sessionStorage.removeItem('token');
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

// Initialize token from sessionStorage
const token = sessionStorage.getItem('token');

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  }
});

// List of endpoints that don't require token
const publicEndpoints = [
  '/api/users/register',
  '/api/users/login'
];

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log('🚀 Making request to:', config.url);
    console.log('Request data:', config.data);
    console.log('Request headers:', config.headers);

    // Check if the endpoint requires authentication
    const isPublicEndpoint = publicEndpoints.some(endpoint => config.url.includes(endpoint));
    
    if (!isPublicEndpoint) {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.log('❌ No token found for protected endpoint');
        // Reject request if token is missing for protected endpoints
        return Promise.reject(new Error('Authentication required'));
      }
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log('API Response:', response);
    // Return the full response to handle different API response formats
    return response;
  },
  (error) => {
    console.error('API Error:', error.response || error);
    // Handle authentication errors
    if (error.message === 'Authentication required' || error.response?.status === 401) {
      setAuthToken(null); // Clear the invalid token
      window.location.href = '/login';
      return Promise.reject(new Error('Please login to continue'));
    }

    const message = error.response?.data?.message || error.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
