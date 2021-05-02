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
import { Redirect } from 'react-router'
import React, {useState, useEffect} from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import * as utils from "views/Dashboard/utils.js";
import Loader from "react-loader-spinner";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function Index() {
  const [loadState, setLoadState]=useState(0);
  const [redState, setRedState] = useState(0);

  let query=useQuery();
  React.useEffect(() => {
  
  var token="";
  function setToken(token){
    localStorage.setItem('token', token);
  }
  // var token = window.sessionStorage.getItem('token');
  // const [currentState, setCurrentState]=useState(0);
  // // sessionStorage.clear();
  // localStorage.clear();
  var code = query.get("code");
  if (code !== null){
    fetch('https://AstroBot.aoztanir.repl.co/token/'+code).then(res=>res.json()).then(data=>{
    console.log(data.token);
    setToken(data.token);
    setRedState(1);
    // return <Redirect to='/dashboard'/>
    },[]);
  // localStorage.setItem('token', token);
    // console.log("TOKO REASSIGNED "+localStorage.getItem('token'));
  }
  if (code===null && localStorage.getItem('token') === null){
    setRedState(2);
    // return <Redirect to='/login'/>
  }
  if (localStorage.getItem('token') !== null){
    setRedState(1);
  }

  //   var token = query.get("token");
  //   if (token!==null){
  //   window.sessionStorage.setItem('token', token);
  //   }
  console.log("TOKO: "+localStorage.getItem('token'));
  // return <Redirect to='/dashboard'/>


  },[]);
  if (redState==1 || redState==3){
    return <Redirect to='/dashboard'/>
  }
  else if(redState!==0){
    return <Redirect to='/login'/>
  }
  return(
      <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
    
      <Loader
        type="ThreeDots"
        color="white"
        className="content-center brand"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>

    );

  // return <Redirect to='/dashboard'/>


}
