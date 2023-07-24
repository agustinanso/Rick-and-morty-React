function PagiNation({ setPage, setLoading, page, currentPage }) {
  function handleNextPage() {
    if (page === 42) return;
    setLoading(true);
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
    }, 1000);
  }

  function handlePrevPage() {
    if (page === 1) return;
    setLoading(true);
    setTimeout(() => {
      setPage((prevPage) => prevPage - 1);
    }, 1000);
  }

  return (
    <div className="flex max-w-[300px]  justify-center w-full mx-auto mt-16 mb-10 sm:mb-16 gap-2">
      <button
        onClick={handlePrevPage}
        className="p-4 rounded-full bg-secondary fill-terciary hover:fill-black hover:bg-quintenary hover:shadow-md hover:shadow-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="rotate-180 ">
          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
      </button>
      <div className="flex items-center justify-center gap-6 px-6 rounded-full text-terciary bg-secondary">
        <p className="items-center justify-center px-4 py-2 text-xl font-bold rounded-full bg-primary">
          {page}
        </p>
        <p className="text-xl font-bold">of: </p>
        <p className="p-2 px-4 text-xl font-bold rounded-full bg-primary">{currentPage}</p>
      </div>

      <button
        onClick={handleNextPage}
        className="p-4 rounded-full bg-secondary fill-terciary hover:fill-black hover:bg-quintenary hover:shadow-md hover:shadow-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
      </button>
    </div>
  );
}

export default PagiNation;
