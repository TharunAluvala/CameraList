export interface Camera {
  cloud: string | undefined;
  id: number;
  _id: any
  name: string;
  location: string;
  recorder: string;
  tasks: string;
  status: 'Active' | 'Inactive';
  current_status: 'Online' | 'Offline';
  health?: {
    cloud: 'A' | 'B' | 'C' | 'D' | 'F';
    device: 'A' | 'B' | 'C' | 'D' | 'F';
  };
  hasWarning?: boolean;
}

export interface ApiResponse {
  data: Camera[];
}

export interface FilterOptions {
  status: string;
  location: string;
  currentStatus: string;
}