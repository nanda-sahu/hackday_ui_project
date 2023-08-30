import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Audiobook from "./components/Audiobook";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/audiobook'element={<Audiobook />} />
       </Routes>
    </>
  );
}

export default App;
