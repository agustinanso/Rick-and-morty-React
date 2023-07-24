function Welcome() {
  return (
    <div className="w-full m-auto text-center mt-28">
      <div>
        <p className="text-5xl font-bold text-white sm:text-6xl">
          ¡Hello <span className="text-quartenary">Stranger</span>!
        </p>

        <p className="p-4 max-w-[300px] m-auto mt-10 text-xl text-quartenary/60">
          Right here below, you can enter the name of the character you want to see.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
