/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import IndexSave from "views/IndexSave.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Servers from "views/Dashboard/servers.js";
import OauthDiscord from "views/Dashboard/oauthDiscord.js";
import LogOut from "views/Dashboard/logOut.js";
import Guild from "views/Dashboard/guild.js";

ReactDOM.render(
  <BrowserRouter>
  <Route exact path="/old" render={() => (window.location = "https://teamastro.ml")} />
  <Route exact path="/inv" render={() => (window.location = "https://discord.com/api/oauth2/authorize?client_id=809609861456723988&permissions=8&redirect_uri=https%3A%2F%2Fteamastro.ml%2Foauth%2Fdiscord&scope=bot")} />
  <Route exact path="/login" render={() => (window.location = "https://discord.com/api/oauth2/authorize?client_id=809609861456723988&redirect_uri=https%3A%2F%2Fteamastro.ml%2Foauth%2Fdiscord&response_type=code&scope=identify%20guilds")} />
  
  <Route exact path="/discord" render={() => (window.location = "https://discord.gg/DwVHSbdcNh")} />
  

    <Switch>
    <Route exact path="/docs" render={() => (window.location = "https://docs.teamastro.ml")} />
    <Route
        path="/guild"
        render={
          (props) => <Guild {...props} />}
      />
      <Route
        path="/example"
        render={
          (props) => <IndexSave {...props} />}
      />
    <Route
        path="/dashboard"
        render={
          (props) => <Servers {...props} />}
      />
      <Route
        path="/logout"
        render={
          (props) => <LogOut {...props} />}
      />
        <Route
        path="/oauth/discord"
        render={
          (props) => <OauthDiscord {...props} />}
      />
      <Route path="/" render={(props) => <Index {...props} />} />
      
   
    
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      
    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);
