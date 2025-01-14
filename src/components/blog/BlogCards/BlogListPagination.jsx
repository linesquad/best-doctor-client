function BlogListPagination({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
  handlePageChange,
}) {
  return (
    <div className="flex justify-center mt-8">
    
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 text-black rounded-lg mr-2 disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          onClick={() => handlePageChange(page + 1)}
          className={`px-4 py-2 ${
            currentPage === page + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          } rounded-lg mr-2`}
        >
          {page + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 text-black rounded-lg ml-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default BlogListPagination;
