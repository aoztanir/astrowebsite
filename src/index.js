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

import Servers from "views/Dashboard/servers.js";
import OauthDiscord from "views/Dashboard/oauthDiscord.js";
import LogOut from "views/Dashboard/logOut.js";
import Guild from "views/Dashboard/guild.js";
import Commands from "views/Dashboard/commands.js";

ReactDOM.render(
  <BrowserRouter>
  <Route exact path="/old" render={() => (window.location = "https://teamastro.ml")} />
  <Route exact path="/inv" render={() => (window.location = "https://discord.com/api/oauth2/authorize?client_id=809609861456723988&permissions=8&redirect_uri=https%3A%2F%2Fastrodisc.ml%2Foauth%2Fdiscord&scope=bot%20applications.commands")} />
  <Route exact path="/login" render={() => (window.location = "https://discord.com/api/oauth2/authorize?client_id=809609861456723988&redirect_uri=https%3A%2F%2Fastrodisc.ml%2Foauth%2Fdiscord&response_type=code&scope=identify%20guilds")} />
  <Route exact path="/premium" render={() => (window.location = "https://patreon.com/astropremium")} />
  <Route exact path="/arc-sw.js" render={() => (window.location = "https://arc.io/arc-sw.js")} />
  <Route exact path="/discord" render={() => (window.location = "https://discord.gg/jz78NnhYGA")} />
  

    <Switch>
    <Route exact path="/docs" render={
          (props) => <Commands {...props} />} />
    <Route exact path="/commands" render={
    (props) => <Commands {...props} />} />
    <Route
        path="/guild/:guild"
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
      
  
    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);
