import React from "react";

const Pagination = ({ onPageChange, totalPages, currentPage }) => {
  function handlePrevious() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }
  return (
    <div className="container text-center mt-4">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button
          disabled={currentPage === 1}
          className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
          type="button"
          onClick={handlePrevious}
        >
        ←
        </button>

        <p className="mb-0">
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </p>

        <button
          disabled={currentPage === totalPages}
          className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
          type="button"
          onClick={handleNext}
        >
        →
        </button>
      </div>
    </div>
  );
};
export default Pagination;
