import apiClient, { setAuthToken } from './config';

export const paymentsApi = {
  // Submit payment
  submitPayment: async ({
    billName,
    billDescription,
    billPriceSetting,
    billPayorInfo,
    billAmount,
    billReturnUrl,
    billCallbackUrl,
    billExternalReferenceNo,
    billTo,
    billEmail,
    billPhone
  }) => {
    try {
      const response = await apiClient.post('/api/payments/', {
        billName,
        billDescription,
        billPriceSetting,
        billPayorInfo,
        billAmount,
        billReturnUrl,
        billCallbackUrl,
        billExternalReferenceNo,
        billTo,
        billEmail,
        billPhone
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
