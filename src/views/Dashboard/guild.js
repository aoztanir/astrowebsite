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
export default function Index(props) {
  const [pills, setPills] = React.useState(1);
  const [successState, setSuccessState] = React.useState(false);
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  const [mutualGuilds, setMutualGuilds] = useState([]);
  const [modWords, setModWords] = React.useState([]);
  const [loadState, setLoadState]=React.useState(0);
  const [fields, setFields]=React.useState([""]);

  const [info, setInfo] = useState({});
  const [admin, setAdmin] = useState(false);
  const [astroAdmin, setAstroAdmin] = useState(false);
  const [guilds, setGuilds] = useState([]);
  const [guild, setGuild] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [settingsModal, setSettingsModal] = React.useState(false);
  const [musicModal, setMusicModal] = React.useState(false);
  const [music, setMusic] = React.useState({'queue':[]});
  const [color, setColor] = React.useState("#1abc9c");
  const [roleModal, setRoleModal] = React.useState(false);

  const [announcementModal, setAnnouncementModal] = React.useState(false);

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
    if (guild_id === null){
      guild_id = props.match.params.guild
      console.log(guild_id)
    }
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
        setUserInfo(data.userInfo);
        console.log(info);
        setMusic(data.music);
        console.log(data.music);
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
  
  },[music]);
  function componentDidMount() {
      fetch('https://AstroBot.aoztanir.repl.co/music/'+'guild.id').then(res=>res.json()).then(data=>{
        console.log(data);
        setMusic(data.music);
        console.log(data.music);
        // setGuilds(data.guilds);
      },[]);
    }
  
  
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
      borderLeft: "0.25rem solid "+color,
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
  function handleAddAnnouncements() {
    if (fields.length>9){
      return;
    }
    const values = [...fields];
    values.push("");
    setFields(values);
  }
  function handleRemoveAnnouncements() {
    
    const values = [...fields];
    var i = values.length-1;
    values.splice(i, 1);
    setFields(values);
  }
  function handleRemove() {
    
    const values = [...modWords];
    var i = values.length-1;
    values.splice(i, 1);
    setModWords(values);
  }
  function handleSubmitRole(event) {
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
    
    fetch(`https://AstroBot.aoztanir.repl.co/submitannouncement/${localStorage.getItem('token')}/${guild.id}`, {
      method: 'POST',
      body: data,
    }).then(res=>res.json()).then(data=>{
      console.log(data);
        
      if (data.error==true){
        setAnnouncementModal(false)
        setDangerModal(true);
        return;
      }
      setAnnouncementModal(false)
      setSuccessModal(true);

      


    },[]);
    

    // setModWords(values);
  }
  function handleSubmitAnnouncements(event) {
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
    
    fetch(`https://AstroBot.aoztanir.repl.co/submitannouncement/${localStorage.getItem('token')}/${guild.id}`, {
      method: 'POST',
      body: data,
    }).then(res=>res.json()).then(data=>{
      console.log(data);
        
      if (data.error==true){
        setAnnouncementModal(false)
        setDangerModal(true);
        return;
      }
      setAnnouncementModal(false)
      setSuccessModal(true);

      


    },[]);
    

    // setModWords(values);
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
    const data2=data
    fetch(`https://AstroBot.aoztanir.repl.co/submitsettings/${localStorage.getItem('token')}/${guild.id}`, {
      method: 'POST',
      body: data,
    }).then(res=>res.json()).then(data=>{
      console.log(data);

      if (data.error==true){
        setSettingsModal(false);
        setDangerModal(true);
        return;
      }
      setModWords(data.modWords);
      var infoSave=info;
      infoSave.prefix=data2.get("prefix");
      setInfo(infoSave);
      setSettingsModal(false)
    setSuccessModal(true);

    
    },[]);
    

    // setModWords(values);
  }

  
  function updateMusic(){
  //   while (true){
  //     setTimeout(function(){
  //       fetch('https://AstroBot.aoztanir.repl.co/music/'+'guild.id').then(res=>res.json()).then(data=>{
  //       console.log(data);
  //       setMusic(data.music);
  //       console.log(data.music);
  //       // setGuilds(data.guilds);
  //     },[]);
  //     },1000)
  // //   setInterval(() => {
  // //     fetch('https://AstroBot.aoztanir.repl.co/music/'+'guild.id').then(res=>res.json()).then(data=>{
  // //       console.log(data);
  // //       setMusic(data.music);
  // //       console.log(data.music);
  // //       // setGuilds(data.guilds);
  // //     },[]);
  // //   }, 5000)
  // }
  
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

      <Button size="lg" color="danger" onClick={() => setMusicModal(true)}>
        <i className="fas fa-play-circle" /> Music
      </Button>

          );
          case true: return (
            <div><Button size="lg" color="neutral" onClick={() => setSettingsModal(true)}>
        <i className="fas fa-cog" /> Settings
      </Button>
      <Button size="lg" color="danger" onClick={() => setMusicModal(true)}>
        <i className="fas fa-play-circle" /> Music
      </Button>
      <Button size="lg" color="success" onClick={() => setAnnouncementModal(true)}>
       <i className="fas fa-volume-up" /> Announcements
      </Button>
       <Button size="lg" color="info" onClick={() => setRoleModal(true)}>
       <i className="fas fa-bolt" /> Reaction Roles
      </Button></div>
          );
        }
      })()}

   

        </div>
      


<Modal
      modalClassName="modal-success"
      isOpen={successModal}
      toggle={() => setSuccessModal(false)}
      style={{width: '20vh'}}
    >
    <div className="modal-header justify-content-center">
              <i size={70} className="text-dark fas fa-check-circle" style={{paddingRight:'0px', fontSize:"50px"}} /></div>
              <div style={{padding:'10px'}}></div>
              <div className="modal-header justify-content-center text-center"style={{padding:'0px'}}>
         
                
             </div>
            
              
          
    
    </Modal>

    <Modal
      modalClassName="modal-danger"
      isOpen={dangerModal}
      toggle={() => setDangerModal(false)}
      size="sm"
    >
    <div className="modal-header justify-content-center">
              <i size={70} className="text-dark fas fa-exclamation-circle" style={{paddingRight:'0px', fontSize:"50px"}} /></div>
              <div style={{padding:'10px'}}></div>
              <div className="modal-header justify-content-center text-center"style={{padding:'0px'}}>
              </div>
    
    </Modal>





 {//Reaction role MODAL 
      }
      <Modal
      modalClassName="modal-announcements"
      isOpen={roleModal}
      toggle={() => setRoleModal(false)}
    >
    <form  onSubmit={handleSubmitRole}>
            <div className="modal-header justify-content-center">
            
              <button className="close" onClick={() => setRoleModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0"><i className="fas fa-bolt" /> Reaction Roles</h3>
              </div>
              
            </div>
            
            <div className="modal-body">
              <div className="text-center text-muted mb-4 mt-3">
      
              </div>


              <FormGroup>
            <Label for="channel">Channel</Label>
            <Input type="select" name="channel" id="channel">
            {info.channels.map((channel, index) => {
            return (
              <option>{channel.name}</option>
            );
            })}
         
            </Input>
          </FormGroup>
            <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>

            <FormGroup>
            <Label for="role">Role To Mention</Label>
            <Input type="select" name="role" id="role">
            <option>None</option>
            {info.roles.map((role, index) => {
            return (
              <option>{role.name}</option>
            );
            })}
         
            </Input>
          </FormGroup>
            <div style={{paddingBottom:'10px'}}></div>
            <FormGroup>
            <Label for="color">Color</Label>
<Input type="color" id="color" name="color"
           defaultValue={color}  onChange={e => setColor(e.target.value)} ></Input>
            </FormGroup>
            <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>
            <div class=" itemTransformation text-center itemTransform card border-left-primary shadow  py-2"style={embedBorder} style={{paddingTop: '20px', padding:'20px'}} >
            <h4> This is the message that will be sent and reacted to for roles!</h4></div>
     <div class=" itemTransformation itemTransform card border-left-primary shadow  py-2"style={embedBorder} >
    
                                <div class=" card-body" >
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
              
              
          <FormGroup>
            <Label for="prefix">
             <img
              alt="..."
              // className="img-raised"
              className="rounded-circle"
              // src={require("assets/img/ryan.jpg").default}
              style={{ width: "50px", height:"50px" }}
              onError={(e)=>{e.target.onerror = null; e.target.src=require("assets/img/discord.png").default}}
              src={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.png`}
            />
            {userInfo.username}</Label>
            <Input
              type="prefix"
              name="title"
              id="title"
              required
              autoComplete="off"
              placeholder="Your Title"
            />
            <Input
            required
              type="textarea"
              name="description"
              id="description"
              required
              placeholder="Description"
              autoComplete="off"
            />
        
          </FormGroup>
          <div style={{paddingBottom:'10px'}}></div>
          <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>
          <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>
      <FormGroup>
     
            {fields.map((field, index) => {
        return (
          <div>
          <div style={{paddingBottom:'10px'}}>
            <Input
            required
              type="title"
              name="fieldTitle"
              id="fieldTitle"
              placeholder="Field Title"
              autoComplete="off"
            />
            
            </div>
            <div style={{paddingBottom:'10px'}}>
            <Input
            required
              type="textarea"
              name="fieldValue"
              id="fieldValue"
              placeholder="Field Text"
              autoComplete="off"
            />
            </div>
            </div>
          );
          })}
          </FormGroup>
          <Button className="btn-simple"color="success" type="button" onClick={handleAddAnnouncements}>
           <i className="fas fa-plus" /> More
          </Button>
          <Button className="btn-simple" color="danger" type="button" onClick={handleRemoveAnnouncements}>
           <i className="fas fa-minus" /> Less
          </Button>
          <div style={{paddingBottom:'10px'}}></div>
          <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>
          <div  style={{ display: "flex" }}>
          
          </div>
        

                  
          </div>
          </div>
          
      </div>
      
  </div>
  <Label for="roleToGive"></Label>
  <Input type="select" name="roleToGive" id="roleToGive">
      
            {info.roles.map((role, index) => {
            return (
              <option>{role.name}</option>
            );
            })}
         
            </Input>
  
  <div className="modal-footer justify-content-center"><Button className="btn-simple" style={{margin: 'auto'}} color="success" type="submit">
           <i className="fas fa-check-circle" /> Save
          </Button></div>
          
            </div>
            </form>
          </Modal>























 {//Announcements MODAL 
      }
      <Modal
      modalClassName="modal-announcements"
      isOpen={announcementModal}
      toggle={() => setAnnouncementModal(false)}
    >
    <form  onSubmit={handleSubmitAnnouncements}>
            <div className="modal-header justify-content-center">
            
              <button className="close" onClick={() => setAnnouncementModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0"><i className="fas fa-volume-up" /> Announcements</h3>
              </div>
              
            </div>
            
            <div className="modal-body">
              <div className="text-center text-muted mb-4 mt-3">
      
              </div>


              <FormGroup>
            <Label for="channel">Channel</Label>
            <Input type="select" name="channel" id="channel">
            {info.channels.map((channel, index) => {
            return (
              <option>{channel.name}</option>
            );
            })}
         
            </Input>
          </FormGroup>
            <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>

            <FormGroup>
            <Label for="role">Role To Mention</Label>
            <Input type="select" name="role" id="role">
            <option>None</option>
            {info.roles.map((role, index) => {
            return (
              <option>{role.name}</option>
            );
            })}
         
            </Input>
          </FormGroup>
            <div style={{paddingBottom:'10px'}}></div>
            <FormGroup>
            <Label for="color">Color</Label>
<Input type="color" id="color" name="color"
           defaultValue={color}  onChange={e => setColor(e.target.value)} ></Input>
            </FormGroup>
            <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>
            
     <div class=" itemTransformation itemTransform card border-left-primary shadow  py-2"style={embedBorder} >
    
                                <div class=" card-body" >
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
              
              
          <FormGroup>
            <Label for="prefix">
             <img
              alt="..."
              // className="img-raised"
              className="rounded-circle"
              // src={require("assets/img/ryan.jpg").default}
              style={{ width: "50px", height:"50px" }}
              onError={(e)=>{e.target.onerror = null; e.target.src=require("assets/img/discord.png").default}}
              src={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.png`}
            />
            {userInfo.username}</Label>
            <Input
              type="prefix"
              name="title"
              id="title"
              required
              autoComplete="off"
              placeholder="Your Title"
            />
            <Input
            required
              type="textarea"
              name="description"
              id="description"
              required
              placeholder="Description"
              autoComplete="off"
            />
        
          </FormGroup>
          <div style={{paddingBottom:'10px'}}></div>
          <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>
          <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>
      <FormGroup>
     
            {fields.map((field, index) => {
        return (
          <div>
          <div style={{paddingBottom:'10px'}}>
            <Input
            required
              type="title"
              name="fieldTitle"
              id="fieldTitle"
              placeholder="Field Title"
              autoComplete="off"
            />
            
            </div>
            <div style={{paddingBottom:'10px'}}>
            <Input
            required
              type="textarea"
              name="fieldValue"
              id="fieldValue"
              placeholder="Field Text"
              autoComplete="off"
            />
            </div>
            </div>
          );
          })}
          </FormGroup>
          <Button className="btn-simple"color="success" type="button" onClick={handleAddAnnouncements}>
           <i className="fas fa-plus" /> More
          </Button>
          <Button className="btn-simple" color="danger" type="button" onClick={handleRemoveAnnouncements}>
           <i className="fas fa-minus" /> Less
          </Button>
          <div style={{paddingBottom:'10px'}}></div>
          <div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div><div style={{paddingBottom:'10px'}}></div>
          <div  style={{ display: "flex" }}>
          
          </div>
        

                  
          </div>
          </div>
          
      </div>
      
  </div>
  
  <div className="modal-footer justify-content-center"><Button className="btn-simple" style={{margin: 'auto'}} color="success" type="submit">
           <i className="fas fa-envelope" /> Send
          </Button></div>
          
            </div>
            </form>
          </Modal>




      {//Music MODAL 
      }
      <Modal
      modalClassName="modal-music"
      isOpen={musicModal}
      toggle={() => setMusicModal(false)}
    >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setMusicModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0"><i className="fas fa-play-circle" /> Music</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="text-center text-muted mb-4 mt-3">

              {(() => {
        switch (music.playing.song) {
          case null:   return (
            <h1><i className="fas fa-headphones" /> Play Something First!</h1>

          );
          case undefined:   return (
            <h1><i className="fas fa-headphones" /> Play Something First!</h1>

          );
          default: return(
<Col>

          <a href={music.playing.weburl} >
          
                    
                            <div class="bg-black itemTransformation itemTransform card border-left-primary shadow  py-2" >
                                <div class=" card-body" >
                                    <div class="row no-gutters align-items-center">
                                        <img
                                          alt="..."
                                          // className="img-raised"
                                          className="  itemTransformation itemTransform"
                                          // src={require("assets/img/ryan.jpg").default}
                                          style={{ width: "100px", height:"100%", borderRadius: '20px' }}
                                          onError={(e)=>{e.target.onerror = null; e.target.src=require("assets/img/discord.png").default}}
                                          src={music.playing.thumbnail}
                                        /><div class="col mr-2">
                                       
                                            <div class="font-weight-bold text-primary text-uppercase mb-1">
                                               <i className="fas fa-play-circle" /> <i className="fas fa-headphones" /> | {music.playing.song.slice(0,22)}... | <code>{music.volume}%</code>
                             
                                                </div>
                                        </div>
                                        <div class="col-auto">
                                        
                
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                 
          </a>
      <h3><i className="fas fa-list" /> Up Next</h3>
          </Col>
          );
        }
      })()}



      {music.queue.map((song, index) => {
      
        return (
          <Col>

          <a href={music.links[index]} >
          
                    
                            <div class="bg-black itemTransformation itemTransform card border-left-primary shadow  py-2"style={embedQueue} >
                                <div class=" card-body" >
                                    <div class="row no-gutters align-items-center">
                                        <img
                                          alt="..."
                                          // className="img-raised"
                                          className="  itemTransformation itemTransform"
                                          // src={require("assets/img/ryan.jpg").default}
                                          style={{ width: "100px", height:"100%", borderRadius: '20px' }}
                                          onError={(e)=>{e.target.onerror = null; e.target.src=require("assets/img/discord.png").default}}
                                          src={music.thumbnails[index]}
                                        /><div class="col mr-2">
                                       
                                            <div class="font-weight-bold text-primary text-uppercase mb-1">
                                              <i className="fas fa-list" /> | <code>{index+1}</code> | {song.slice(0,22)}... | <code>{music.volume}%</code>
                             
                                                </div>
                                        </div>
                                        <div class="col-auto">
                                        
                
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                 
          </a>
      
          </Col>
        );
      })}
              </div>
              </div>
              </Modal>






      {//SETTINGS MODAL 
      }
      <Modal
      modalClassName="modal-black"
      isOpen={settingsModal}
      toggle={() => setSettingsModal(false)}
    >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setSettingsModal(false)}>
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
           <i className="fas fa-check-circle" /> Save Changes
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
