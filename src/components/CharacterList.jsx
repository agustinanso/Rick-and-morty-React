import { useEffect, useState } from "react";
import Character from "./Character";
import PagiNation from "./PagiNation";
import NavBar from "./NavBar";

export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrenPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        setLoading(false);
        setCharacters(data.results);
        setCurrenPage(data.info.pages);
      } catch (error) {
        setLoading(false);
        setCharacters([]);
      }
    }

    fetchData();
  }, [page, search]);

  if (!characters) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-col items-center justify-center px-2 mx-auto">
      <NavBar setSearch={setSearch} setCurrenPage={setCurrenPage} />
      <div className="mx-auto sm:hidden">
        <PagiNation
          page={page}
          setPage={setPage}
          setLoading={setLoading}
          setCurrentpage={setCurrenPage}
          currentPage={currentPage}
        />
      </div>
      {loading ? (
        <div
          className=" items-center mt-64 mb-64 inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid border-quintenary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span className="mx-auto !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,,0,0)]"></span>
        </div>
      ) : (
        <div className="relative grid justify-center gap-10 m-auto mb-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-28 w-[300px] sm:w-full">
          {characters.map((character) => {
            return <Character key={character.id} character={character} />;
          })}
        </div>
      )}

      {/* buttons Pagination */}

      <PagiNation
        page={page}
        setPage={setPage}
        setLoading={setLoading}
        setCurrentpage={setCurrenPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default CharacterList;
