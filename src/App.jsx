import { useEffect, useState } from "react";
import Search from "./components.jsx/Search";
import Buttons from "./components.jsx/Buttons";
import Galery from "./components.jsx/Galery";

function App() {
  const [search1, setSearch1] = useState("");
  return (
    <>
      <header className="flex justify-center items-center">
        <h1 className="tit text-pink-500 text-3xl my-10">Photo Gallery</h1>
      </header>

      <main className="flex flex-col justify-center items-center">
        <Search valorIngreso={search1} setValorIngreso={setSearch1} />
        <section className="grid grid-cols-3 sm:grid-cols-6 mt-6 gap-4 my-8">
          <Buttons categoryName="Mountain" setCategory={setSearch1} />
          <Buttons categoryName="Flowers" setCategory={setSearch1} />
          <Buttons categoryName="Sea" setCategory={setSearch1} />
          <Buttons categoryName="Faces" setCategory={setSearch1} />
          <Buttons categoryName="Cats" setCategory={setSearch1} />
          <Buttons categoryName="Dogs" setCategory={setSearch1} />
        </section>
        <section>
          <Galery search={search1} />
        </section>
      </main>

      <footer className="flex justify-center items-center mt-16 bg-pink-300">
        <p className="my-12">
          created by <strong>yamirengifo</strong>
        </p>
      </footer>
    </>
  );
}

export default App;
