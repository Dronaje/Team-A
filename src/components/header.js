import * as React from 'react';
import logo from '../static/dronajeHeader.png';
import Menu from '../components/BurgerMenu';
import Dronage from '../static/add.png';
import "../index.css";

export default function AssetExample() {
  return (
    <div className="head">
        <img src={logo} className="pages-logo" alt="logo"/>
        <Menu />
        <img src={Dronage} className="dronage-logo" alt="logo2"/>
    </div>
  );
}