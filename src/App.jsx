import "./App.css";
import Header from "./components/Header";
import Artist from "./pages/Artists/Artist";
import Artists from "./pages/Artists/Artists";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </>
  );
}

export default App;
