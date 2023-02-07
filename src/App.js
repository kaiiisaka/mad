import React from "react";
import Header from "./Components/Header";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Team from "./Components/Team";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="App bg-gradient-to-br from-black via-blue-800 to-rose-600 flex flex-col text-white items-center min-h-screen h-full">
        <Header />
        <h1 className='sm:text-2xl animate-pulse'>Welcome</h1>
        <First />
        <Second />
        <Third />
        <Fourth />
        <Team />
        <Footer />
    </div>
  );
}

export default App;
