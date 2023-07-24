import Search from "./Search";

const NavBar = ({ setSearch, setCurrenPage }) => {
  return (
    <div className=" w-full  mx-auto border-b-[1px] border-quintenary/10">
      <div className="container items-center justify-center ">
        <div className="flex flex-col items-center pt-6 pb-6 lg:flex-row ">
          <img src="/portal-rick-and-morty.gif" className="w-14 sm:w-20" />
          <div className=" ml-[10px]">
            <img src="/Rick_and_Morty.svg" className="w-56 sm:w-52" />
          </div>

          <Search setSearch={setSearch} setCurrenPage={setCurrenPage} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
