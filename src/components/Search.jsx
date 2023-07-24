function Search({ setSearch, setCurrenPage }) {
  const handleSearchChange = (e) => {
    setCurrenPage(1);
    setSearch(e.target.value);
  };
  return (
    <div className="items-center justify-center mx-auto mt-10 text-center lg:mt-0">
      <div className="text-center sm:w-[500px]">
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Search character by name"
          className=" w-[300px] md:w-full px-8 py-4 pt-4 rounded-full bg-secondary border-[1px] border-terciary text-quintenary text-xl placeholder:text-terciary placeholder:opacity-40"
        />
      </div>
    </div>
  );
}

export default Search;
