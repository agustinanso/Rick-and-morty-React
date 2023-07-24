function Character({ character }) {
  return (
    <div className="items-center mx-auto">
      <div className="flex w-full  flex-col gap-2 p-5 rounded-lg shadow-lg bg-secondary shadow-black max-h-[900px] h-full ">
        <div className="flex flex-col w-full gap-3 ">
          <p className="text-2xl text-center font-bold text-terciary border-b-[1px] pb-2 pt-2 border-quintenary max-w-[300px]">
            {character.name}
          </p>
          <p className="text-lg font-bold text-quartenary">
            Status: <span className="text-white  text-[14px]">{character.status}</span>
          </p>
          <p className="text-lg font-bold text-quartenary">
            Species: <span className="text-white  text-[14px]">{character.species}</span>
          </p>
          <p className="text-lg font-bold text-quartenary">
            Gender: <span className="text-white text-[14px]">{character.gender}</span>
          </p>
          <p className="text-lg font-bold text-quartenary">
            Location:
            <span className="text-[14px] text-white"> {character.location.name}</span>
          </p>
        </div>
        <div className="-order-1">
          <img src={character.image} alt={character.name} className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Character;
