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
import{  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
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
export default function Index() {
  const [pills, setPills] = React.useState(1);
  const [successState, setSuccessState] = React.useState(false);
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  const [mutualGuilds, setMutualGuilds] = useState([]);
  const [modWords, setModWords] = React.useState([]);
  const [loadState, setLoadState]=React.useState(0);

  const [info, setInfo] = useState({});
  const [admin, setAdmin] = useState(false);
  const [astroAdmin, setAstroAdmin] = useState(false);
  const [guilds, setGuilds] = useState([]);
  const [guild, setGuild] = useState({});
  const [formModal, setFormModal] = React.useState(false);
  const [successModal, setSuccessModal] = React.useState(false);
  const [dangerModal, setDangerModal ]= useState(false);

  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  var token= localStorage.getItem('token')
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
    var guild_id = query.get("guild");
    console.log(guild_id)
    if (guild_id===null){
      setLoadState(3);
    }
    if (guild_id!==null){
      fetch('https://AstroBot.aoztanir.repl.co/guild/'+localStorage.getItem('token')+'/'+guild_id).then(res=>res.json()).then(data=>{
        console.log(data);
        
        setGuild(data.guild);
        setAdmin(data.admin);
        setAstroAdmin(data.astroadmin);
        setInfo(data.info);
        setModWords(data.modWords);
     
        // setGuilds(data.guilds);
        setLoadState(1);
        console.log(data.error)
        if (data.error===true){
          console.log('STETTING')
          setLoadState(404);
        }
      },[]);
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
    
  
  console.log(loadState)
  },[]);
  
  
  if (localStorage.getItem('token')===null){
    return <Redirect to="/oauth/discord" />
  }
  if (loadState===3 || loadState===404){
return <Redirect to="/dashboard" />
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

  
  function handleChange(i, event) {
    const values = [...modWords];
    values[i].value = event.target.value;
    setModWords(values);
  }

  function handleAdd() {
    const values = [...modWords];
    values.push("" );
    setModWords(values);
  }

  function handleRemove() {
    
    const values = [...modWords];
    var i = values.length-1;
    values.splice(i, 1);
    setModWords(values);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // fetch('https://AstroBot.aoztanir.repl.co/guild/'+localStorage.getItem('token')+'/'+guild_id).then(res=>res.json()).then(data=>{
    //     console.log(data);
        
    //     setGuild(data.guild);
    //     setAdmin(data.admin);
    //     setAstroAdmin(data.astroadmin);
    //     setInfo(data.info);
    //     setModWords(data.modWords);
     
    //     // setGuilds(data.guilds);
    //     setLoadState(1);
    //     console.log(data.error)
    //     if (data.error===true){
    //       console.log('STETTING')
    //       setLoadState(404);
    //     }
    //   },[]);
    
    fetch(`https://AstroBot.aoztanir.repl.co/submitsettings/${localStorage.getItem('token')}/${guild.id}`, {
      method: 'POST',
      body: data,
    }).then(res=>res.json()).then(data=>{
      console.log(data);
      setModWords(data.modWords);
    },[]);
    setFormModal(false)
    setSuccessModal(true);
    console.log(data.get("prefix"))
    var infoSave=info;
    infoSave.prefix=data.get("prefix");
    setInfo(infoSave);

    // setModWords(values);
  }

  
  
  return (
    <>



    <IndexNavbar guildPass={mutualGuilds}/>
    <div
      className="content-center section section-download"
      data-background-color="black"
       style={{height:'99vh'}}
    >
    <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <div className="section section-tabs">
      <Container>

         <div className="title text-center content-center">
        <div style={{paddingBottom: '20px'}}>
        <img

          // className="img-raised"
          className="img-fluid rounded-circle shadow-lg itemTransformation itemTransform"
          // src={require("assets/img/ryan.jpg").default}
          style={{ width: "150px", height:"100%" }}
          onError={(e)=>{e.target.onerror = null; e.target.src=require("assets/img/discord.png").default}}
          src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
        />
        </div>
          <h3 className="mb-3">{guild.name}</h3>
        </div>
        <div className="title text-center content-center">

        {(() => {
        switch (admin) {
          case false:   return (

      <Button size="lg" color="danger" onClick={() => setFormModal(true)}>
        <i className="fas fa-play-circle" /> Music
      </Button>

          );
          case true: return (
            <div><Button size="lg" color="neutral" onClick={() => setFormModal(true)}>
        <i className="fas fa-cog" /> Settings
      </Button>
      <Button size="lg" color="danger" onClick={() => setFormModal(true)}>
        <i className="fas fa-play-circle" /> Music
      </Button>
      <Button size="lg" color="success" onClick={() => setFormModal(true)}>
       <i className="fas fa-volume-up" /> Announcements
      </Button></div>
          );
        }
      })()}

   

        </div>
      


<Modal
      modalClassName="modal-success"
      isOpen={successModal}
      toggle={() => setSuccessModal(false)}
    >
    <div className="modal-header justify-content-center">
              <i size={70} className="text-dark fas fa-check-circle" style={{paddingRight:'20px', fontSize:"50px"}} /></div>
              <div style={{padding:'10px'}}></div>
              <div className="modal-header justify-content-center text-center"style={{padding:'0px'}}>
         
                
                 <h3 class='text-dark'>All Your Changes Have Been Carefully Recorded!</h3>
             </div>
            
              
              <Button
                className="btn-neutral"
                color="link"
                onClick={() => setDangerModal(false)}
                type="button"
              >
                Close
              </Button>
    
    </Modal>

    <Modal
      modalClassName="modal-danger"
      isOpen={dangerModal}
      toggle={() => setDangerModal(false)}
    >
    <div className="modal-header justify-content-center">
              <i size={70} className="text-dark fas fa-exclamation-circle" style={{paddingRight:'20px', fontSize:"50px"}} /></div>
              <div style={{padding:'10px'}}></div>
              <div className="modal-header justify-content-center text-center"style={{padding:'0px'}}>
         
                
                 <h3 class='text-dark'>An Error Occured Please Try Again.</h3>
             </div>
            
              
              <Button
                className="btn-neutral"
                color="link"
                onClick={() => setDangerModal(false)}
                type="button"
              >
                Close
              </Button>
    
    </Modal>











      {//SETTINGS MODAL 
      }
      <Modal
      modalClassName="modal-black"
      isOpen={formModal}
      toggle={() => setFormModal(false)}
    >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0"><i className="fas fa-cog" /> Settings</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="text-center text-muted mb-4 mt-3">
      
              </div>
              <form  onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="prefix">Prefix</Label>
            <Input
              type="prefix"
              name="prefix"
              id="prefix"
              required
              autoComplete="off"
              defaultValue={info.prefix}
            />
        
          </FormGroup>
          
      <FormGroup>
            <Label for="modWords">Moderated Words</Label>
            {modWords.map((word, index) => {
        return (
          <div style={{paddingBottom:'10px'}}>
            <Input
            required
              type="modWords"
              name="modWords"
              id="modWords"
              defaultValue={word}
              autoComplete="off"
            />
            </div>
          );
          })}
          </FormGroup>
          <Button className="btn-simple"color="success" type="button" onClick={handleAdd}>
           <i className="fas fa-plus" /> More
          </Button>
          <Button className="btn-simple" color="danger" type="button" onClick={handleRemove}>
           <i className="fas fa-minus" /> Less
          </Button>
          <div style={{paddingBottom:'10px'}}></div>
          <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>
          <div  style={{ display: "flex" }}>
          <Button className="btn-simple" style={{margin: 'auto'}} color="success" type="submit">
           <i className="fas fa-check" /> Submit
          </Button>
          </div>
        </form>
            </div>
          </Modal>


          

      





















       
  
      </Container>
    </div>
  
    </div>
    

     
      
    </>
  );
}
