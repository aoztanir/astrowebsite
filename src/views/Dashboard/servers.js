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
import React, {useState, useEffect} from "react";
import * as utils from "views/Dashboard/utils.js";
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
import { Redirect } from 'react-router';
import Download from "views/IndexSections/Download.js";
// import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import Loader from "react-loader-spinner";

import {
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
export default function Index() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  const [mutualGuilds, setMutualGuilds] = useState([]);
  const [loadState, setLoadState]=useState(0);
  const [guilds, setGuilds] = useState([]);
  var token= localStorage.getItem('token')
  // var user_info=utils.get_user_data(token);
  // console.log(user_info.username);
  var info = null;
  const elements = ['one', 'two', 'three'];
  var items=[]

  
  

  
  
  
  React.useEffect(() => {
    

    fetch('https://astrobackend.aoztanir.repl.co/guilds/'+localStorage.getItem('token')).then(res=>res.json()).then(data=>{
      console.log(data);
      setMutualGuilds(data.mutualGuilds);
      setGuilds(data.guilds);
      setLoadState(1);
    },[]);
    
    var i;
    for (i=0; i<elements.length;i++) {
      console.log("adding")
      items.push(<li>{elements[i]}</li>)
    }
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
    

    setLoadState(1);
  }, []);
  
  if (localStorage.getItem('token')===null){
    return <Redirect to="/oauth/discord" />
  }

  if (loadState===0){
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
      borderLeft: "0.25rem solid #00ffaa ",
      borderRight: "none",
      borderBottom: "none",
      borderTop: "none",
    };
     const embedBorder2 = {
      borderLeft: "0.25rem solid gray ",
      borderRight: "none",
      borderBottom: "none",
      borderTop: "none",
    };

  const grayImg ={
     width: "50px",
     height:"50px", 
  webkitFilter: "grayscale(100%)",
  filter: "grayscale(100%)"
};
  
  
  return (
    <>
      <IndexNavbar />
      <div
      className="section section-download"
      data-background-color="black" 
    >
    {
    // <div className="squares square1" />
    //   <div className="squares square2" />
    //   <div className="squares square3" />
    //   <div className="squares square4" />
    //   <div className="squares square5" />
    //   <div className="squares square6" />
    //   <div className="squares square7" />
    }
      <div style={{maxWidth: '900px',margin: "0 auto",
  alignSelf: 'center', justifyContent:"center", minHeight: "99vh"}}>

   <div style={{maxWidth: '900px'}} style={{margin: "0 auto",
  alignSelf: 'center', justifyContent:"center", minHeight: "99vh"}} className="">
<Row xs={1}md={3} lg={3} >
    {mutualGuilds.map((guild, index) => {
      
        return (
          <Col>
          <a href={"/guild/"+guild.id} >
          
                    
                            <div class="bg-black itemTransformation itemTransform card border-left-primary shadow  py-2"style={embedBorder} >
                                <div class=" card-body" >
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="font-weight-bold text-primary text-uppercase mb-1">
                                              <p class="text-white" style={{fontWeight:"bold"}}>{guild.name.slice(0,25)}</p>
                             
                                                </div>
                                        </div>
                                        <div class="col-auto">
                                        <img
                                          alt="..."
                                          // className="img-raised"
                                          className="img-fluid rounded-circle shadow-lg itemTransformation itemTransform"
                                          // src={require("assets/img/ryan.jpg").default}
                                          style={{ width: "50px", height:"50px" }}
                                          onError={(e)=>{e.target.onerror = null; e.target.src=require("assets/img/discord.png").default}}
                                          src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                                        />
                
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                 
          </a>
          </Col>
        );
      })}
      
      {guilds.map((guild, index) => {
      
        return (
          <Col>
          <a href={"/inv"} target="_blank">
          
                    
                            <div class="bg-black itemTransformation itemTransform card border-left-secondary shadow  py-2"style={embedBorder2} >
                                <div class=" card-body" >
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="font-weight-bold text-primary text-uppercase mb-1">
                                              <p class="text-white" style={{fontWeight:"bold"}}>{guild.name.slice(0,25)}</p>
                             
                                                </div>
                                        </div>
                                        <div class="col-auto">
                                        <img
                                          alt="..."
                                          // className="img-raised"
                                          className="img-fluid rounded-circle shadow-lg itemTransformation itemTransform"
                                          // src={require("assets/img/ryan.jpg").default}
  
                                          style={grayImg}
                                          onError={(e)=>{e.target.onerror = null; e.target.src=require("assets/img/discord.png").default}}
                                          src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                                        />
                
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                 
          </a>
          </Col>
          
        );
      })}

      </Row>
      </div>
      </div>
      </div>
    
     
      
    </>
  );
}
