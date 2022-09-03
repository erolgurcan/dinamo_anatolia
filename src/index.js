// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./component/Login/Login";
import UserRouter from "./component/UserDashBoard/UserRouter";
import Register from "./component/Register/Register";
import BoardMember from "./component/BoardMember/BoardMember";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="user-router/*" element={<UserRouter />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="board-member" element={<BoardMember />}></Route>
    </Routes>
  </BrowserRouter>
);
