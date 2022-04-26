import * as React from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import TodoList from "./pages/Home/TodoList";
import List from "./pages/List";
import Edit from "./pages/Edit";

function App() {
    return (
        <div className="App">

            <div className="container mx-auto">
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/home" element={<TodoList/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/list" element={<List/>}/>
                        <Route path="/edit" element={<Edit/>}/>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
