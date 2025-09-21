import apiClient from './config';

// Booking-related API calls
export const bookingApi = {
  // Create a new booking
  createBooking: async ({ 
    room_id, 
    user_id, 
    shop_id, 
    checkin_date, 
    checkout_date, 
    status, 
    payment_status, 
    total_price, 
    remarks, 
    booking_no 
  }) => {
    try {
      const response = await apiClient.post('/api/bookings/', {
        room_id,
        user_id,
        shop_id,
        checkin_date,
        checkout_date,
        status,
        payment_status,
        total_price,
        remarks,
        booking_no
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get user's bookings
  getUserBookings: async (user_id) => {
    try {
      const response = await apiClient.get(`/api/users/bookings/${user_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get booking details
  getBookingDetails: async (token, bookingId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
        method: 'GET',
        headers: getHeaders(token),
      });
      return handleApiResponse(response);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update booking status
  updateBookingStatus: async (token, bookingId, status) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/status`, {
        method: 'PUT',
        headers: getHeaders(token),
        body: JSON.stringify({ status }),
      });
      return handleApiResponse(response);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
