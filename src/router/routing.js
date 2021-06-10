import { Switch, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import Auth from '../pages/Auth';
import HomePage from '../pages/HomePage';
import DescriptionPage from '../pages/ImageDescription';
import MyCategorsPage from '../pages/UserCategories';
import OptionsPage from '../pages/CategoriesOptions';
import SharingConfirmPage from '../pages/SharingConfirm';
import SharingPage from '../pages/Sharing';
import NewCategoryPage from '../pages/NewCategory';
import LoginPage from '../pages/Login';
import SignInPage from '../pages/SignIn';
import MfaPage from '../pages/MFA';

function Routing() {
  return (
    <div className="AppContainer">
        <BrowserRouter >
          <Switch>
            <Route path="/" exact> <Auth /> </Route>
            <Route path="/homepage" exact> <HomePage /> </Route>
            <Route path="/description" exact> <DescriptionPage /> </Route>
            <Route path="/categories" exact> <MyCategorsPage /> </Route>
            <Route path="/options" exact> <OptionsPage /> </Route>
            <Route path="/confirm" exact> <SharingConfirmPage /> </Route>
            <Route path="/sharing" exact> <SharingPage /> </Route>
            <Route path="/category" exact> <NewCategoryPage /> </Route>
            <Route path="/login" exact> <LoginPage /> </Route>
            <Route path="/signin" exact> <SignInPage /> </Route>
            <Route path="/mfa" exact> <MfaPage /> </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default Routing;

