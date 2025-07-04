/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';
import { usePagination } from './hooks/usePagination';
import { useCameras } from './hooks/useCameras';
import Header from './components/Header';
import Filters from './components/Filters';
import CameraTable from './components/CameraTable';
import PaginationControls from './components/Pegination';


const App = () => {
  const {
    cameras,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    toggleCameraStatus,
    deleteCamera,
  } = useCameras();

  const {
    currentPage,
    pageSize,
    totalPages,
    paginatedData,
    goToPage,
    nextPage,
    prevPage,
    setPageSize,
    hasNextPage,
    hasPrevPage,
    totalItems,
    startIndex,
    endIndex,
  } = usePagination(cameras, 10);

  if (loading) {
    return (
      <div className="loading-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="wrapper">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters filters={filters} setFilters={setFilters} />
        <CameraTable
          paginatedData={paginatedData}
          toggleCameraStatus={toggleCameraStatus}
          deleteCamera={deleteCamera}
        />
        <div style={{display:"flex", justifyContent: "end", padding:"10px"}}>
            <PaginationControls
          pageSize={pageSize}
          setPageSize={setPageSize}
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={totalItems}
          goToPage={goToPage}
          prevPage={prevPage}
          nextPage={nextPage}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
        </div>
      
      </div>
    </div>
  );
};

export default App;
