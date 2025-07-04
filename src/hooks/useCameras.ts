import { useState, useEffect, useCallback } from 'react';
import { Camera, FilterOptions } from '../types/camera';
import { fetchCameras, updateCameraStatus } from '../services/api';

export const useCameras = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    status: '',
    location: '',
    currentStatus: '',
  });

  const loadCameras = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCameras();
      setCameras(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load cameras');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCameras();
  }, [loadCameras]);

  const toggleCameraStatus = async (id: number) => {
    try {
      const camera = cameras.find(c => c.id === id);
      if (!camera) return;

      const newStatus = camera.status === 'Active' ? 'Inactive' : 'Active';
      
      // Optimistic update
      setCameras(prev => 
        prev.map(c => 
          c.id === id ? { ...c, status: newStatus } : c
        )
      );

      await updateCameraStatus(id, newStatus);
    } catch (err) {
      // Revert on error
      setCameras(prev => 
        prev.map(c => 
          c.id === id ? { ...c, status: c.status === 'Active' ? 'Inactive' : 'Active' } : c
        )
      );
      setError(err instanceof Error ? err.message : 'Failed to update camera status');
    }
  };

  const deleteCamera = (id: number) => {
    setCameras(prev => prev.filter(c => c.id !== id));
  };

  const filteredCameras = cameras.filter(camera => {
    const matchesSearch = 
      camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camera.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camera.recorder.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !filters.status || camera.status === filters.status;
    const matchesLocation = !filters.location || camera.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesCurrentStatus = !filters.currentStatus || camera.current_status === filters.currentStatus;

    return matchesSearch && matchesStatus && matchesLocation && matchesCurrentStatus;
  });

  return {
    cameras: filteredCameras,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    toggleCameraStatus,
    deleteCamera,
    refresh: loadCameras,
  };
};