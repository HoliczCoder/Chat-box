import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add.js";
import Edit from "./pages/Edit.js";
import GalleryImage from "./pages/GalleryImage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route path="/edit" element={<Edit></Edit>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/gallery"
            element={<GalleryImage></GalleryImage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
