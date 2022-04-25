import * as React from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

import Home from "./home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import TodoList from "./pages/Home/TodoList";
import List from "./pages/List";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container mx-auto">
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/" element={<TodoList/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/list" element={<List/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
