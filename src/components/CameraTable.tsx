/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Warning_Icon from '../Icons/Warning_Icon';
import Cloud_Icon from '../Icons/Cloud_Icon';
import Device_Icon from '../Icons/Device_Icon';
import { GradeSVG } from '../Icons/Gradesvg';
import Deactivate_Icon from '../Icons/Deactivate_Icon';

const CameraTable = ({ paginatedData, toggleCameraStatus, deleteCamera }: any) => {
  const getStatusColor = (camera: any) => {
    if (camera.current_status === 'Offline') return '#EF4444';
    return camera.status === 'Active' ? '#10B981' : '#6B7280';
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th><input type="checkbox" className="checkbox" />NAME</th>
            <th>HEALTH</th>
            <th>LOCATION</th>
            <th>RECORDER</th>
            <th>TASKS</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((camera: any) => (
            <tr key={camera.id}>
              <td>
                <div className="camera-info">
                  <input type="checkbox" />
                  <div className="camera-dot" style={{ backgroundColor: getStatusColor(camera) }}></div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="camera-name">{camera.name}</div>
                      {camera.hasWarning && <div><Warning_Icon /></div>}
                    </div>
                    <div className="camera-email">
                      {camera.name.toLowerCase().replace(/\s+/g, '')}@wobot.ai
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ display: "flex", alignItems: 'center' }}>
                <Cloud_Icon />
                <GradeSVG grade={camera?.health?.cloud} color={camera?.health?.cloud === "A" ? "#029262" : '#FF7E17'} />
                <Device_Icon />
                <GradeSVG grade={camera?.health?.device} color={camera?.health?.device === "A" ? "#029262" : '#FF7E17'} />
              </td>
              <td><span className="camera-text">{camera.location}</span></td>
              <td><span className="camera-text">{camera.recorder || 'N/A'}</span></td>
              <td><span className="camera-text">{camera.tasks ? `${camera.tasks} Tasks` : 'N/A'}</span></td>
              <td>
                <span
                  onClick={() => toggleCameraStatus(camera?.id)}
                  className="status-badge"
                  style={{
                    backgroundColor: camera.status === 'Active' ? '#D1FAE5' : '#F3F4F6',
                    color: camera.status === 'Active' ? '#065F46' : '#6B7280',
                    cursor: "pointer"
                  }}
                >
                  {camera.status}
                </span>
              </td>
              <td>
                <button
                  onClick={() => deleteCamera(camera.id)}
                  className="delete-button"
                >
                  <Deactivate_Icon />
                </button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>{paginatedData.length <= 0 && 
          <div style={{display:"flex",justifyContent:"center",padding:"10px"}}>No data found</div>
          }
    </div>
  );
};

export default CameraTable;
