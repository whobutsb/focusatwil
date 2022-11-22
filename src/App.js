import SlideShow from './SlideShow.js';
import FAQ from './FAQ.js';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      <header className="sticky top-0 z-30 w-full px-5 py-4 bg-gray-200 shadow-xl">

        <div className="flex items-center mx-auto">
          <h1 className="mr-5 font-serif text-5xl font-bold text-orange-500 crimson-font">
            focus@wil
          </h1>
          <div className="flex items-center text-xl hover:underline space-x-1">
            {/* <a href="#"> */}
            {/*   How it Works */}
            {/* </a> */}
          </div>
        </div>
      </header>
      <main className="mb-auto bg-gray-100">
        <section className="w-full p-5">
          <SlideShow />
        </section>
        <div className="flex flex-col mt-4">
          <p className="self-center text-3xl font-bold text-center">Focus at Wil(s). <br />Optimized by science.</p>
          <h1 className="self-center mt-4 text-3xl text-center">
            focus@wil 2.0 - The Wiliverse is coming!
          </h1>
        </div>

        <div className="px-4 pb-10 mt-20 lg:px-24">
          <h1 className="text-3xl font-bold text-center">Common questions</h1>
          <FAQ />
        </div>
      </main>
      <footer className="flex justify-center p-5 bg-blue-400">
        <div>
          Help build the <a className="underline"href="https://github.com/whobutsb/focusatwil">Wiliverse</a>
        </div>
      </footer>
    </div>
  );
}

export default App;


