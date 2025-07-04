import { Camera, ApiResponse } from '../types/camera';

const API_BASE_URL = 'https://api-app-staging.wobot.ai/app/v1';
const AUTH_TOKEN = '4ApVMIn5sTxeW7GQ5VWeWiy';

const headers = {
  'Authorization': `Bearer ${AUTH_TOKEN}`,
  'Content-Type': 'application/json',
};

export const fetchCameras = async (): Promise<Camera[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/fetch/cameras`, {
      headers,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching cameras:', error);
    throw error;
  }
};

export const updateCameraStatus = async (id: number, status: 'Active' | 'Inactive'): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/update/camera/status`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ id, status }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error updating camera status:', error);
    throw error;
  }
};