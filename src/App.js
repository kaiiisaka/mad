import React from "react";
import Header from "./Components/Header";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";

function App() {
  return (
    <div className="App bg-black flex flex-col text-white items-center min-h-screen h-full">
        <Header />
        <h1 className='sm:text-2xl'>Welcome</h1>
        <First />
        <Second />
        <Third />
    </div>
  );
}

export default App;
