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
    src: require("assets/img/playingSS.png").default,
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
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">

<div className="section">
<Container>
          <div className="title">
     
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
               <i className="fas fa-play-circle" />  Music
              </h1>
              <p className="text-white mt-4">
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
                src={require("assets/img/playingSS.png").default}
              />
            </Col>
          </Row>
        </Container>

<div style={{padding: '60px'}}></div>

        <Container>
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
                src={require("assets/img/muteSS.png").default}
              />
              
            </Col>
            <Col lg="6">
            <h1 className="text-white font-weight-light">
                <i className="fas fa-cog" /> Moderation
              </h1>
              <p className="text-white mt-4">
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
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                <i className="fas fa-rocket" /> Dashboard
              </h1>
              <p className="text-white mt-4">
                Control Astro through the Astro Dashboard!
              </p>
              <Button
                className="btn-simple mt-4"
                color="neutral"
                href="/oauth/discord"
              >
                Dashboard
              </Button>
            </Col>
            <Col lg="6">
            <img
                alt="..."
                // className="img-raised"
                className="itemTransform itemTransformation img-fluid  shadow-lg"
                // src={require("assets/img/ryan.jpg").default}
                style={{}}
                src={require("assets/img/serversSS.png").default}
              />
            </Col>
          </Row>
        </Container>
        <div style={{padding: '60px'}}></div>
        <Container>
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
                src={require("assets/img/helpSS.png").default}
              />
              
            </Col>
            <Col lg="6">
            <h1 className="text-white font-weight-light">
                <i className="fas fa-globe" /> All Features
              </h1>
              <p className="text-white mt-4">
                Astro comes with a handful of features ranging from basic moderation to music plugins. To see a full list of commands, visit the <a href="/docs">documentation</a>.
              </p>
              <Button
                className="btn-simple mt-4"
                color="neutral"
                href="/docs"
              >
                See all features
              </Button>
            
            </Col>
          </Row>
        </Container>
      </div>
        </div>

        
        <Footer />
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
