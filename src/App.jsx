import { useEffect, useState } from "react";
import Search from "./components.jsx/Search";
import Buttons from "./components.jsx/Buttons";
import Galery from "./components.jsx/Galery";

function App() {
  return (
    <>
      <header className="flex justify-center items-center">
        <h1 className="text-pink-500 font-bold text-2xl my-8">Photo Gallery</h1>
      </header>

      <main className="flex flex-col justify-center items-center">
        <Search />
        <section className="grid grid-cols-2 sm:grid-cols-4 mt-6 gap-4">
          <Buttons category={"Mountain"} />
          <Buttons category={"Flowers"} />
          <Buttons category={"Sea"} />
          <Buttons category={"Faces"} />
        </section>
        <section>
          <Galery />
        </section>
      </main>

      <footer className="flex justify-center items-center mt-16 mb-4">
        <p>
          created by <strong>yamirengifo</strong>
        </p>
      </footer>
    </>
  );
}

export default App;
