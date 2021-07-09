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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";
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
import Loader from "react-loader-spinner";
export default function Index() {
  const [loadState, setLoadState]=React.useState(0);
  const [teamInfo, setTeamInfo]= React.useState([
     
     
    {"name": "Aryah Öztanır", "link": "https://aryah.ml", "pfp": "https://cdn.discordapp.com/avatars/608778878835621900/52ef129db095bdb091e553294cf45aec.webp?size=1024", "description": "Creator of astro"},
    // {"name": "Chatanya Sarin", "pfp": "https://images-ext-1.discordapp.net/external/pujFTCHU3l_Gn4jmZFFfa4FdVx4Qn33sg4XKJwwvZsI/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/806380959582126151/9f19685979973dee52639d70bc825664.webp?width=600&height=600", "description": "Assistant Developer"},
    
    // {"name": "Dhruv Kapur", "pfp": "https://cdn.discordapp.com/avatars/274672439546347522/4af3025b00debba3e787351e6ff25997.webp?size=1024", "description": "Assistant Developer"}

  ])
  const carouselItems = [
  // {
  //   src: require("assets/img/mutedSS.png").default,
  //   altText: "Slide 1",
  //   caption: "",
  // },
  // {
  //   src: require("assets/img/muteSS.png").default,
  //   altText: "Slide 2",
  //   caption: "",
  // },
  {
    src: require("assets/img/music.png").default,
    altText: "Slide 3",
    caption: "",
  },
];

  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
   
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
    
  },[]);
  if (loadState!==1){
  return (
    <>
    <div style={{fontWeight: "bold"}}>
    <div style={{background: '#1d1e22'}}>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
</div>
<div style ={{background: '#242529'}} className="section">
<Container>
          <div className="title">
     
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 style={{fontWeight: "bold"}}  className="text-white">
               <i className="fas fa-play-circle" />  Music
              </h1>
              <p style={{fontWeight: "bold"}} className="text-white mt-4">
                Astro can play any song you want him to, and along with that he has features such as a queue, lyrics, search, and more!
              </p>
     
            </Col>
            <Col lg="6">
            <img
                alt="..."
                // className="img-raised"
                className="itemTransform itemTransformation img-fluid  shadow-lg"
                // src={require("assets/img/ryan.jpg").default}
                style={{}}
                src={require("assets/img/music.png").default}
              />
            </Col>
          </Row>
        </Container>

<div style={{padding: '60px'}}></div>

        <Container >
          <div className="title">
     
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0"   lg="5">
            <img
                alt="..."
                // className="img-raised"
                className="itemTransform itemTransformation img-fluid  shadow-lg"
                // src={require("assets/img/ryan.jpg").default}
                style={{}}
                src={require("assets/img/mute.png").default}
              />
              
            </Col>
            <Col lg="6">
            <h1 style={{fontWeight: "bold"}} className="text-white">
                <i className="fas fa-cog" /> Moderation
              </h1>
              <p style={{fontWeight: "bold"}} className="text-white mt-4">
                Moderation is a key aspect in a discord environment, and here Astro can do it all! From muting and kicking, to moderating words, Astro has got you covered!
              </p>
        
            
            </Col>
          </Row>
        </Container>
        <div style={{padding: '60px'}}></div>
        <Container>
          <div className="title">
     
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0"   lg="5">
            <h1 style={{fontWeight: "bold"}} className="text-white ">
                <i className="fas fa-info-circle" /> Useful Information
              </h1>
              <p style={{fontWeight: "bold"}} className="text-white mt-4">
                Astro can help you with all sorts of things related to info in your servers!
              </p>
            
              
            </Col>
            <Col lg="6">
            
            <img
                alt="..."
                // className="img-raised"
                className="itemTransform itemTransformation img-fluid  shadow-lg"
                // src={require("assets/img/ryan.jpg").default}
                style={{}}
                src={require("assets/img/info.png").default}
              />
            </Col>
          </Row>
        </Container>

<div style={{padding: '60px'}}></div>

        <Container>
          <div className="title">
     
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <img
                alt="..."
                // className="img-raised"
                className="itemTransform itemTransformation img-fluid  shadow-lg"
                // src={require("assets/img/ryan.jpg").default}
                style={{}}
                src={require("assets/img/serversSS.png").default}
              />
            </Col>
            <Col lg="6">
            <h1 style={{fontWeight: "bold"}} className="text-white ">
                <i className="fas fa-rocket" /> Dashboard
              </h1>
              <p style={{fontWeight: "bold"}} className="text-white mt-4">
                Control Astro through the Astro Dashboard!
              </p>
              <Button
                className=" mt-4"
                color="danger"
                href="/oauth/discord"
              >
                <p style={{fontWeight: "bold"}}>
                Dashboard</p>
              </Button>
            
            </Col>
          </Row>
        </Container>
        <div style={{padding: '60px'}}></div>
        <Container>
          <div className="title">
     
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0"   lg="5">
            <h1 style={{fontWeight: "bold"}} className="text-white">
                <i className="fas fa-globe" /> All Features
              </h1>
              <p style={{fontWeight: "bold"}} className="text-white mt-4">
                Astro comes with a handful of features ranging from basic moderation to music plugins. To see a full list of commands, visit the <a class="text-success"  style={{fontWeight: "bold", color:"success"}} href="/docs">documentation</a>.
              </p>
              <Button
                className=" mt-4"
                color="success"
                href="/docs"
              ><p style={{fontWeight: "bold"}}>
                See All Features</p>
              </Button>
            
              
            </Col>
            <Col lg="6">
            
            <img
                alt="..."
                // className="img-raised"
                className="itemTransform itemTransformation img-fluid  shadow-lg"
                // src={require("assets/img/ryan.jpg").default}
                style={{}}
                src={require("assets/img/help.png").default}
              />
            </Col>
          </Row>
        </Container>
        
      </div>
        </div>
<div style ={{background: 'royalblue'}} className="section">
<Container>


<div style={{color:"white"}} className=" page-header-filter content-center">
    {
      // <div className="squares square1" />
      // <div className="squares square2" />
      // <div className="squares square3" />
      // <div className="squares square4" />
      // <div className="squares square5" />
      // <div className="squares square6" />
      // <div className="squares square7" />
    }
      <Container  >
      <span><p style={{color:"white",fontSize: "20px",fontWeight:"bold"}} className="">MEET</p></span>
       <span>
          <h1 style={{color:"white", fontSize: "70px",fontWeight:"bold"}} className="h1-seo">THE CREATOR</h1></span>
          <div>
          
          <div style={{paddingTop:"30px"}} className="content-center text-center">
          <Row xs={1}md={1} lg={1} >
          {teamInfo.map((member, index) => {
      
        return (
          <Col>
         
           <img
                alt="..."
                // className="img-raised"
                className="itemTransform itemTransformation img-fluid rounded-circle shadow-lg"
                // src={require("assets/img/ryan.jpg").default}
                style={{ width: "200px", height:"200px" }}
                src={require("assets/img/profilepic.png").default}
              />
              <div style={{paddingTop:"20px"}}>
              <h1 style={{color:"white",fontSize: "40px",fontWeight:"bold"}} className="h1-seo">{member.name}</h1>
              <Button
                className=""
                color="danger"
                target="_blank"
                href="https://aryah.ml/#about"
              ><p style={{fontWeight: "bold"}}>
                About Me</p>
              </Button><Button
                className=""
                color="info"
                target="_blank"
                href="mailto:aoztanir25@gmail.com"
              ><p style={{fontWeight: "bold"}}>
                Contact Me</p>
              </Button>
            
              </div>
            
            </Col>
        );
          })}
            </Row>
            </div>
              {
          // <Button href="/inv" target="_blank" className="" color="success" type="button">
        
          //     <p style={{fontWeight:"bold"}}>Invite Astro</p>
          //   </Button>
          //   <Button href="/oauth/discord" className="" color="danger" type="button">
        
          //     <p style={{fontWeight:"bold"}}>Dashboard</p>
          //   </Button>
              }
            {
            // <Button href="/docs"className="" color="info" type="button">
        
            //  <p style={{fontWeight:"bold"}}>Docs</p>
            // </Button>
            }
      
        </div>
      </Container>
    </div>



</Container>
</div>
        
        <Footer />
      </div>
      </div>
    </>
  );
  }
  else{
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
  }
}
