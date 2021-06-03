import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import ImgDes from './pages/ImageDescription';
import Categors from './pages/CategoriesOptions';
import SharingC from './pages/SharingConfirm';
import Sharing from './pages/Sharing';
import NweCategor from './pages/NewCategory';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <HomePage /> */}
    {/* <ImgDes /> */}
    {/* <Categors /> */}
    {/* <Sharing /> */}
    {/* <NweCategor /> */}
    <Login />
    {/* <SignIn /> */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();