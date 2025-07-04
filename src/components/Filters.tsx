/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Location_Icon } from '../Icons/Location_Icon';
import Status_Icon from '../Icons/Status_Icon';

const Filters = ({ filters, setFilters }: any) => {
  return (
    <div className="filters">
      <div className="filter-group">
        <span className="filter-icon">
          <Location_Icon />
        </span>
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="filter-select no-border-select"
        >
          <option value="">Location</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Chicago">Chicago</option>
          <option value="Miami">Miami</option>
          <option value="Seattle">Seattle</option>
          <option value="San Diego">San Diego</option>
          <option value="Boston">Boston</option>
        </select>
      </div>

      <div className="filter-group">
        <span className="filter-icon">
          <Status_Icon />
        </span>
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="filter-select no-border-select"
        >
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
