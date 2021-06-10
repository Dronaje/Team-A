import * as React from 'react';
import logo from '../static/dronajeHeader.png';
import user from '../static/user.png';
import Menu from '../components/BurgerMenu';
import "../index.css";

export default function AssetExample() {
  return (
    <div className="head">
        <img src={logo} className="pages-logo" alt="logo"/>
        <Menu />
        <img src={user} className="user" alt="user"/>
    </div>
  );
}