import apiClient from './config';

export const shopsApi = {
  // Get all shops with room types
  getAllShops: async () => {
    try {
      const response = await apiClient.get('/api/shops/withroomtype');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Search shops by availability
  searchShops: async ({ start_date, end_date, location }) => {
    try {
      const response = await apiClient.post('/api/shops/availability', {
        start_date,
        end_date,
        location,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get selected shop availability
  getShopAvailability: async ({ start_date, end_date, location, id }) => {
    try {
      const response = await apiClient.post('/api/shops/availability', {
        start_date,
        end_date,
        location,
        id
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
