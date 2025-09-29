import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      // لو عدد الصفحات قليل → اعرض الكل
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // دايمًا أول صفحة
      pages.push(1);

      // لو الصفحة الحالية بعد 4 → اعرض ...
      if (currentPage > 4) {
        pages.push("...");
      }

      // الصفحات حول currentPage
      for (
        let i = Math.max(2, currentPage - 2);
        i <= Math.min(totalPages - 1, currentPage + 2);
        i++
      ) {
        pages.push(i);
      }

      // لو الصفحة الحالية قبل آخر -3 → اعرض ...
      if (currentPage < totalPages - 3) {
        pages.push("...");
      }

      // آخر صفحة
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {/* زر السابق */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`px-3 py-1 border rounded ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        {"<"}
      </button>

      {/* الصفحات */}
      {getPages().map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-3 py-1">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 border rounded ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* زر التالي */}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border rounded ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
