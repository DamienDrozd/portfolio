import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import Blog from './pages/blog'
import About from './pages/about'
import Context from './pages/context'
import Article from './pages/article'
import Contact from './pages/contact'


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/context" element={<Context/>} />
        <Route path="/article" element={<Article/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);