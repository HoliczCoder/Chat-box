import * as React from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./pages/todos/List";
import Add from "./pages/todos/Add";
import Edit from "./pages/todos/Edit";
import GalleryImage from "./pages/todos/GalleryImage";
import Login from "./pages/auth/Login";


function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container mx-auto">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<List/>}/>
                        <Route path="/add" element={<Add/>}/>
                        <Route path="/edit" element={<Edit/>}/>
                        <Route path="/gallery" element={<GalleryImage/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App