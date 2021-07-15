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
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import astro from "assets/img/astro.png";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { Redirect } from 'react-router';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Image = ({ src, alt, fallback }) => {
  const [error, setError] = React.useState(false);

  const onError = () => {
    setError(true);
  };

  return error ? fallback : <img src={src} alt={alt} onError={onError} />;
};
export default function IndexNavbar() {
  let query=useQuery();
  const [username, setUsername] = React.useState({'useless': true, 'username':"Loading..."});
  const [defaultAv, setDefaultAv]= React.useState("assets/img/astro.png");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const [loggedIn, setLoggedIn] = React.useState(0);
  const [mutualGuilds, setMutualGuilds] = React.useState([{"name":"No Servers"}]);
  // var username="Astro"
  
  React.useEffect(() => {
    if (query.get("iframe")!="yes"){
    if (localStorage.getItem('token') !== null){
    fetch('https://astrobackend.aoztanir.repl.co/userinfo/'+localStorage.getItem('token')).then(res=>res.json()).then(data=>{
      console.log(data);

      // setToken(data.token);
      setUsername(data);
      console.log(`https://cdn.discordapp.com/embed/avatars/${data.discriminator}.png`);
      console.log(`https://cdn.discordapp.com/avatars/${username.id}/${username.avatar}.png`);
      },[]);
      fetch('https://astrobackend.aoztanir.repl.co/guilds/'+localStorage.getItem('token')).then(res=>res.json()).then(data=>{
        console.log(data);
        setMutualGuilds(data.mutualGuilds);

 
      },[]);
      
    }
      
  }
  if (username.useless==true){

  }else{
    setLoggedIn(1);
  }
  
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("navbar-transparent");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  // if (loggedIn==0){
  return (
    <Navbar className={" " + color} color-on-scroll="100" expand="lg">
      <Container>
         <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
           <div><span style={{fontWeight:"bold"}}>ASTRO </span></div>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            <a href="https://top.gg/bot/809609861456723988">
  <img src="https://top.gg/api/widget/status/809609861456723988.svg" alt="astro" />
  </a>
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  ASTRO
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
     
          <NavItem className="p-0">
          <NavLink
            data-placement="bottom"
            href="/discord"
            target="_blank"
            rel="noopener noreferrer"
           
          >
            <i class="fab fa-discord"></i>
            <p style={{fontWeight:"bold"}} className="d-lg-none d-xl-none">Support</p>
          </NavLink>
          
        </NavItem>
        <NavItem className="p-0">
          <NavLink
            data-placement="bottom"
            href="/premium"
            target="_blank"
            rel="noopener noreferrer"
           
          >
            <i class="fas fa-gem"></i>
            <p style={{fontWeight:"bold"}} className="d-lg-none d-xl-none">Premium</p>
          </NavLink>
          
        </NavItem>
    
            {(() => {
  
  switch (loggedIn) {
     case 1:
         return (
          <UncontrolledDropdown nav>
          <DropdownToggle
            caret
            color="default"
            data-toggle="dropdown"
            href="#"
            nav
            onClick={(e) => e.preventDefault()}
            style={{backgroundColor: "danger", borderRadius: "20px", borderRadius: "20px"}}
          >
            <p style={{fontWeight:"bold"}}><i className="fas fa-list d-lg-none d-xl-none" />
            Servers</p>
          </DropdownToggle>
          <DropdownMenu  style={{backgroundColor: '#212529'}}  className="dropdown-with-icons">

            {mutualGuilds.map((guild, index) => {
  
          return (
            <div>
            
            <DropdownItem href={"/guild/"+guild.id}>
            
            
              
              <p style={{fontWeight:"bold"}}>{guild.name.slice(0,25)}</p>
            </DropdownItem>
            </div>
          );
          })}
          </DropdownMenu>
        </UncontrolledDropdown>
         )

     default:
         return (
           <></>
         )
  }

})()}

               <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#"
                nav
                onClick={(e) => e.preventDefault()}
                
              >
                <p style={{fontWeight:"bold"}}><i className="fas fa-external-link-alt d-lg-none d-xl-none" />
                Pages</p>
              </DropdownToggle>
              <DropdownMenu style={{backgroundColor: '#212529'}}  className="dropdown-with-icons">
                <DropdownItem href="/">
                  <p style={{fontWeight:"bold"}}><i className="fas fa-home" />
                  Home</p>
                </DropdownItem>
                <DropdownItem tag={Link} to="/commands">
                 <p style={{fontWeight:"bold"}}> <i className="fas fa-book" />
                  Commands</p>
                </DropdownItem>
                <DropdownItem tag={Link} to="/discord">
                  <p style={{fontWeight:"bold"}}><i className="fab fa-discord" />
                  Support</p>
                </DropdownItem>
                <DropdownItem tag={Link} to="/dashboard">
                  <p style={{fontWeight:"bold"}}><i className="fas fa-rocket" />
                  Dashboard</p>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div style={{paddingRight: '7px', paddingBottom: '7px'}}>
            {(() => {
  
  switch (loggedIn) {
     case 1:
         return (
          <UncontrolledDropdown nav>
          <DropdownToggle
            caret
            color="default"
            data-toggle="dropdown"
            href="#"
            nav
            onClick={(e) => e.preventDefault()}
            // style={{backgroundColor: "turquoise", borderRadius: "20px", borderRadius: "20px", paddingRight: "6px",paddingLeft: "6px"}}
          >
          <img
          alt="..."
          // className="img-raised"
          className="img-fluid rounded-circle shadow-lg itemTransformation itemTransform"
          // src={require("assets/img/ryan.jpg").default}
          style={{ width: "20px", height:"20px" }}
          onError={(e)=>{e.target.onerror = null; e.target.src=require("assets/img/discord.png").default}}
          src={`https://cdn.discordapp.com/avatars/${username.id}/${username.avatar}.png`}
        /><div style={{ paddingRight: '5px'}}></div>
  
            <p style={{fontWeight:"bold"}}>{username.username}</p>
          </DropdownToggle>
          <DropdownMenu  style={{backgroundColor: '#212529'}}  className="dropdown-with-icons">
            <DropdownItem href="/dashboard">
             <p style={{fontWeight:"bold"}}><i className="fas fa-rocket" />
              Dashboard</p>
            </DropdownItem>
            <DropdownItem tag={Link} to="/dashboard">
              <p style={{fontWeight:"bold"}}><i className="fas fa-list" />
              Servers</p>
            </DropdownItem>
            <DropdownItem tag={Link} to="/logout">
             <p style={{fontWeight:"bold"}}> <i className="fas fa-lock" />
              Log Out</p>
            </DropdownItem>
 
          </DropdownMenu>
        </UncontrolledDropdown>
         )

     default:
         return (
          <NavItem className="p-0">
          <NavLink
            data-placement="bottom"
            href="/login"
            rel="noopener noreferrer"
            style={{backgroundColor: "royalblue", borderRadius: "10px", paddingRight: "6px",paddingLeft: "6px"}}
          >
            <p style={{fontWeight:"bold"}}><i className="fas fa-sign-in-alt" />Login</p>
          </NavLink>
          
        </NavItem>
         )
  }

})()}
        
        </div>

            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
  // }
  if (2==3){
    return (
      
      <Navbar className={" " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
           <div><span style={{fontWeight:"bold"}}>ASTRO </span></div>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            <a href="https://top.gg/bot/809609861456723988">
  <img src="https://top.gg/api/widget/status/809609861456723988.svg" alt="astro" />
  </a>
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  ASTRO
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="/discord"
                rel="noopener noreferrer"
                target="_blank"
                title="Join The Astro Discord"
              >
                <i className="fab fa-discord" />
                <p style={{fontWeight:"bold"}} className="d-lg-none d-xl-none">Discord</p>
                
              </NavLink>
              
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#"
                nav
                onClick={(e) => e.preventDefault()}
                style={{backgroundColor: "danger", borderRadius: "20px", borderRadius: "20px", paddingRight: "6px",paddingLeft: "6px"}}
              >
                <p style={{fontWeight:"bold"}}><i className="fa fa-cogs d-lg-none d-xl-none" />
                Servers</p>
              </DropdownToggle>
              <DropdownMenu  style={{backgroundColor: '#212529'}}  className="dropdown-with-icons">

                {mutualGuilds.map((guild, index) => {
      
              return (
                <div>
                
                <DropdownItem href={"/guild/"+guild.id}>
                
                
                  
                  <p style={{fontWeight:"bold"}}>{guild.name.slice(0,25)}</p>
                </DropdownItem>
                </div>
              );
              })}
              </DropdownMenu>
            </UncontrolledDropdown>
            

               <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <p style={{fontWeight:"bold"}}><i className="fa fa-cogs d-lg-none d-xl-none" />
                Pages</p>
              </DropdownToggle>
              <DropdownMenu style={{backgroundColor: '#212529'}}  className="dropdown-with-icons">
                <DropdownItem href="/">
                  <p style={{fontWeight:"bold"}}><i className="fas fa-home" />
                  Home</p>
                </DropdownItem>
                <DropdownItem tag={Link} to="/commands">
                  <p style={{fontWeight:"bold"}}><i className="fas fa-book" />
                  Commands</p>
                </DropdownItem>
                <DropdownItem tag={Link} to="/discord">
                  <p style={{fontWeight:"bold"}}><i className="fab fa-discord" />
                  Support</p>
                </DropdownItem>
                <DropdownItem tag={Link} to="/dashboard">
                  <p style={{fontWeight:"bold"}}><i className="fas fa-rocket" />
                  Dashboard</p>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#"
                nav
                onClick={(e) => e.preventDefault()}
                // style={{backgroundColor: "turquoise", borderRadius: "20px", borderRadius: "20px", paddingRight: "6px",paddingLeft: "6px"}}
              >
              <img
              alt="..."
              // className="img-raised"
              className="img-fluid rounded-circle shadow-lg itemTransformation itemTransform"
              // src={require("assets/img/ryan.jpg").default}
              style={{ width: "20px", height:"20px" }}
              onError={(e)=>{e.target.onerror = null; e.target.src=require("assets/img/discord.png").default}}
              src={`https://cdn.discordapp.com/avatars/${username.id}/${username.avatar}.png`}
            /><div style={{ paddingRight: '5px'}}></div>
      
                <p style={{fontWeight:"bold"}}>{username.username}</p>
              </DropdownToggle>
              <DropdownMenu  style={{backgroundColor: '#212529'}}  className="dropdown-with-icons">
                <DropdownItem href="/dashboard">
                 <p style={{fontWeight:"bold"}}><i className="fas fa-rocket" />
                  Dashboard</p>
                </DropdownItem>
                <DropdownItem tag={Link} to="/dashboard">
                  <p style={{fontWeight:"bold"}}><i className="fas fa-list" />
                  Servers</p>
                </DropdownItem>
                <DropdownItem tag={Link} to="/logout">
                 <p style={{fontWeight:"bold"}}> <i className="fas fa-lock" />
                  Log Out</p>
                </DropdownItem>
     
              </DropdownMenu>
            </UncontrolledDropdown>

            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>

    );
  }
}
