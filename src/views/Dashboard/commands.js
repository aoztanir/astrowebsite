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
import{ CustomInput, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  { useEffect} from "react";
import * as utils from "views/Dashboard/utils.js";
// core components
import EmojiPicker from 'emoji-picker-react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import { FiRepeat, FiShuffle, FiPauseCircle, FiSkipForward, FiSkipBack } from 'react-icons/fi';
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
import { Redirect } from 'react-router';
import React, { useState, useRef } from 'react';

import Download from "views/IndexSections/Download.js";
import { Picker } from 'emoji-mart';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import Loader from "react-loader-spinner";
import classnames from "classnames";
// reactstrap components

import {
   Form,
   FormText,
  Input,
  Alert,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  NavLink,



  PaginationItem,
  PaginationLink,
  Badge,
  Progress,
  TabContent,
  TabPane,
  Button,
  Card,
  CardHeader,
  CardBody,
  
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  CardImg, CardText, CardSubtitle,
  Row,
  Col,
} from "reactstrap";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function formatAliases(aliases){
  if (aliases.length==0){
    return "None"
  }
  var alias_str=""
  for(let i = 0; i < aliases.length; i++){

  alias_str+=aliases[i];
  if (i+1!=aliases.length){
    alias_str+=", "
  }
}
return (alias_str.trim(", "))
}
export default function Index(props) {
  const [commands, setCommands] = React.useState([]);
  const [loadState, setLoadState] = React.useState(-1);
  const [commandState, setCommandState]=React.useState({"name":"Music", "commands":[]});
  
  
  // var user_info=utils.get_user_data(token);
  // console.log(user_info.username);
  
  let query=useQuery();
  const elements = ['one', 'two', 'three'];
  var items=[]


     const embedBorder2 = {
      borderLeft: "0.25rem solid gray ",
      borderRight: "none",
      borderBottom: "none",
      borderTop: "none",
    };

  const grayImg ={
     width: "100px",
     height:"100px", 

};

function cos(){
  console.log("sent")
}

  

  
  
  
  React.useEffect(() => {
    
    // var content_load= props.match.params.mode
    // console.log("CONTENT TO LOAD: "+content_load)
    // if (content_load=="settings"){
    //   //settings=0
    //   //announcements=1
    //   setMode(0)
    // }
    // else if (content_load=="announcements"){
    //   setMode(1)
    // }
    // else{
    //   setMode(0)
    // }
    // if (gu)

    fetch('https://astrobackend.aoztanir.repl.co/commands').then(res=>res.json()).then(data=>{

      setCommands(data.commands)
      for (var i = 0; i < data.commands.length; i++) {
        
          if (data.commands[i].cog_name=="Music"){
            setCommandState({"name": "Music", "commands": data.commands[i].commands})
          }
          //Do something
      }
      setLoadState(1);

    },[]);
   
    
    // console.log("HIIII")
    
    

    // fetch('/api').then(res => res.json()).then(data=>{
    //   console.log(data)
    //   setCurrentState(data.title)
    // });
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };

  document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
    
  
    
    // Specify how to clean up after this effect:
    
  
  console.log(loadState)
  
  },[]);

  
 

  if (loadState===-1){
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
        //3 secs
      />
      </div>

    );
  }
  const embedBorder = {
      borderLeft: "0.25rem solid black",
      borderRight: "none",
      borderBottom: "none",
      borderTop: "none",
      backgroundColor: "#36393f"
    };
    const embedQueue = {
      borderLeft: "0.25rem solid "+"tomato",
      borderRight: "none",
      borderBottom: "none",
      borderTop: "none",
      backgroundColor: "#36393f"
    };

  
  return(
    <>
    
    <IndexNavbar/>
<div style={{maxWidth: '',marginLeft: "15px", marginRight: "15px",
  alignSelf: 'center', justifyContent:"center", minHeight: "70vh"}} className="content-center">
<div className="text-center">
   {commands.map((cog, index) => {
        if (commandState.name==cog.cog_name){
          return (
            <>
           <Button
                className=" mt-4"
                color="success"
                onClick={() => setCommandState({"name":cog.cog_name, "commands": cog.commands})}
              >
                <p style={{fontWeight: 'bold'}}>
          {cog.cog_name}</p>
              </Button>
            
          
          </>
        );
        }
        else{
        return (
           <Button
                className=" mt-4"
                color="info"
                onClick={() => setCommandState({"name":cog.cog_name, "commands": cog.commands})}
              >
                <p style={{fontWeight: 'bold'}}>
          {cog.cog_name}</p>
              </Button>
          
          
        );
        }

   })}
   </div>
  <div style={{padding: '30px'}}></div>
  
   <div style={{maxWidth: '700px',margin: "0 auto",
  alignSelf: 'center', justifyContent:"center",}} className="content-center">
  <div style={{backgroundColor: "royalblue", padding:"20px", borderRadius: "7px"}} className="itemTransform itemTransformation text-center"><h3 style={{color: "white", fontWeight: 'bold'}}><i class="fas fa-cog"></i>&nbsp;
          Tips</h3>
        
          <h4 style={{fontWeight: 'bold'}}><code>
{"<>"} means that the argument is required<p></p><p></p>
[] means that the argument is optional
</code></h4>

            
                </div>
                <div style={{padding: "10px"}}></div>
            {commandState.commands.map((command, index) => {
              return(
                <>
                <div style={{backgroundColor: "#2a2c30", padding:"20px", borderRadius: "7px"}} className="itemTransform itemTransformation"><h4 style={{fontWeight: 'bold'}}><i class="fas fa-arrow-alt-circle-right"></i>&emsp;
          {command.name.toUpperCase()}</h4>
          <p style={{fontWeight: 'bold'}}>&emsp;&emsp;<i class="fas fa-book"></i>&emsp;
          <em>{command.description}</em></p>
          <p style={{fontWeight: 'bold'}}><code>&emsp;&emsp;&emsp;&emsp;<i class="fas fa-play-circle"></i>&emsp;
          {command.signature}</code></p>
          <p style={{fontWeight: 'bold'}}>&emsp;&emsp;<i class="fas fa-th-list"></i>&emsp;Aliases:&emsp;
          {formatAliases(command.aliases)}</p>
          <p style={{fontWeight: 'bold'}}>&emsp;&emsp;<i class="fas fa-bookmark"></i>&emsp;
          {command.category}</p>
            
                </div>
                <div style={{padding: "10px"}}></div>
                </>
              );
            })}
            </div>


  </div>
    <Footer/>
    

     
      
    </>
  );
}
