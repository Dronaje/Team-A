import { Switch, Route, BrowserRouter } from "react-router-dom";
import React, {useEffect} from "react";

import Auth from '../pages/Auth';
import HomePage from '../pages/HomePage';
import DescriptionPage from '../pages/ImageDescription';
import MyCategorsPage from '../pages/UserCategories';
import OptionsPage from '../pages/CategoriesOptions';
import ImageForm from '../pages/ImageForm';
import LoginPage from '../pages/Login';
import VideoForm from '../pages/VideoForm';
import SignInPage from '../pages/SignUp';
import MfaPage from '../pages/MFA';
import Error404Page from '../pages/404';
import Error500Page from '../pages/500';

import Amplify from "aws-amplify";
import {COGNITO} from  '../configs/aws'; 
// require('dotenv').config()

function Routing() {

  // useEffect(() => {
  //   // Amplify.configure({
  //   //   Auth: {
  //   //     region: process.env.REACT_APP_REGION,
  //   //     userPoolId: process.env.REACT_APP_USER_POOL_ID,
  //   //     userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
  //   //   },
  //   // });
  // });

  Amplify.configure({
  aws_cognito_region: COGNITO.REGION,
  aws_user_pools_id: COGNITO.USER_POOL_ID,
  aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
  });


  return (
    <div className="AppContainer">
        <BrowserRouter >
          <Switch>
            <Route path="/" exact> <Auth /> </Route>
            <Route path="/homepage" exact> <HomePage /> </Route>
            <Route path="/description" exact> <DescriptionPage /> </Route>
            <Route path="/categories" exact> <MyCategorsPage /> </Route>
            <Route path="/options" exact> <OptionsPage /> </Route>
            <Route path="/imageform" exact> <ImageForm /> </Route>
            <Route path="/login" exact> <LoginPage /> </Route>
            <Route path="/signin" exact> <SignInPage /> </Route>
            <Route path="/mfa" exact> <MfaPage /> </Route>
            <Route path="/videoform" exact> <VideoForm /> </Route>
            <Route path="/500" exact> <Error500Page /> </Route>
            <Route path="/*" exact> <Error404Page /> </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default Routing;

