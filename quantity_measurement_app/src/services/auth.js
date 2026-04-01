import api from './api';
import { API_BASE_URL } from '../utils/constants';
import axios from 'axios';

export const authService = {
  register: async (fullName, email, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      fullName,
      email,
      password
    });
    return response.data;
  },

  login: async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password
    });
    return response.data;
  },

  logout: async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      await axios.post(`${API_BASE_URL}/auth/logout`, { refreshToken });
    }
    localStorage.clear();
  },

  getCurrentUser: () => {
    return {
      email: localStorage.getItem('email'),
      fullName: localStorage.getItem('fullName')
    };
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('accessToken');
  }
};

export const measurementService = {
  compare: async (quantity1, quantity2) => {
    const response = await api.post('/api/v1/quantities/compare', {
      thisQuantityDTO: quantity1,
      thatQuantityDTO: quantity2
    });
    return response.data;
  },

  convert: async (quantity, targetUnit) => {
    const response = await api.post('/api/v1/quantities/convert', {
      thisQuantityDTO: quantity,
      thatQuantityDTO: { ...quantity, unit: targetUnit }
    });
    return response.data;
  },

  add: async (quantity1, quantity2, targetUnit) => {
    const endpoint = targetUnit 
      ? '/api/v1/quantities/add-with-target-unit'
      : '/api/v1/quantities/add';
    
    const payload = {
      thisQuantityDTO: quantity1,
      thatQuantityDTO: quantity2
    };

    if (targetUnit) {
      payload.targetQuantityDTO = { ...quantity1, unit: targetUnit };
    }

    const response = await api.post(endpoint, payload);
    return response.data;
  },

  subtract: async (quantity1, quantity2, targetUnit) => {
    const endpoint = targetUnit
      ? '/api/v1/quantities/subtract-with-target-unit'
      : '/api/v1/quantities/subtract';

    const payload = {
      thisQuantityDTO: quantity1,
      thatQuantityDTO: quantity2
    };

    if (targetUnit) {
      payload.targetQuantityDTO = { ...quantity1, unit: targetUnit };
    }

    const response = await api.post(endpoint, payload);
    return response.data;
  },

  divide: async (quantity1, quantity2) => {
    const response = await api.post('/api/v1/quantities/divide', {
      thisQuantityDTO: quantity1,
      thatQuantityDTO: quantity2
    });
    return response.data;
  },

  getHistory: async (operation) => {
    const response = await api.get(`/api/v1/quantities/history/operation/${operation}`);
    return response.data;
  },

  getHistoryByType: async (type) => {
    const response = await api.get(`/api/v1/quantities/history/type/${type}Unit`);
    return response.data;
  },

  getErrorHistory: async () => {
    const response = await api.get('/api/v1/quantities/history/errored');
    return response.data;
  }
};
