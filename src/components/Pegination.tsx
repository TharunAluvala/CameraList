import React from 'react';

const PaginationControls = ({
  pageSize,
  setPageSize,
  startIndex,
  endIndex,
  totalItems,
  goToPage,
  prevPage,
  nextPage,
  hasNextPage,
  hasPrevPage
}: any) => {
  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        <div className="page-size-selector" style={{display: "flex", gap: "10px", alignItems:"center"}}>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="pagination-select"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span>{startIndex}-{endIndex} of {totalItems}</span>
        </div>
        <button onClick={() => goToPage(1)} disabled={!hasPrevPage} className="pagination-arrow">&lt;&lt;</button>
        <button onClick={prevPage} disabled={!hasPrevPage} className="pagination-arrow">&lt;</button>
        <button onClick={nextPage} disabled={!hasNextPage} className="pagination-arrow">&gt;</button>
        <button onClick={() => goToPage(endIndex)} disabled={!hasNextPage} className="pagination-arrow">&gt;&gt;</button>
      </div>
    </div>
  );
};

export default PaginationControls;
