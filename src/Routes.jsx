import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Loading from "./pages/Loading";
import Episode from "./pages/Episode";
import CitadelofRicks from "./pages/CitadelofRicks";
import AboutUs from "./pages/AboutUs";

const RoutesPages = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/episode" element={<Episode/>}/>
            <Route path="/citadelofRicks" element={<CitadelofRicks/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="*" element={<Loading/>}/>
        </Routes>
    </BrowserRouter>
)

export default RoutesPages;