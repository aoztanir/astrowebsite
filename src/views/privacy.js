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
    <div style={{maxWidth: '1200px',margin: "0 auto",
  alignSelf: 'center', justifyContent:"center", minHeight: "99vh"}}>
    <div style={{background: '#1d1e22'}}>
      <IndexNavbar />

      <div className="wrapper " style={{minHeight:"80vh", maxWidth: '900px'}} style={{marginLeft: "20px",marginRight: "20px",
  alignSelf: 'center', justifyContent:"center", minHeight: "80vh",  maxWidth: '1200px'}}>
      <div style={{padding: '40px'}}></div>
      <div className="text-center">
        <h1 style={{fontWeight: 'bold'}}>Privacy Policy</h1></div>
        <div style={{padding: '20px'}}></div>
        <div className="text-white"style={{background: '#242529', borderRadius: '7px', padding: '40px'}}>
<p style={{fontSize: '15px', fontWeight:'normal'}}>
<h2 style={{fontWeight: 'bold'}}>
Types of Data Collected</h2>
We store the following user data:<p></p>
<ul>
    <li>
    <b>
User Cache:</b> For Astro to run and respond quickly and save bandwidth, we cache users whenever an action is sent to the bot on their behalf. This includes sending messages to changing their username or status. This cache is cleared minimum every 10 minutes to maximum 1 hour.</li>
<li><b>User Premium</b> Information: When a user has premium activated for them or redeems a premium code, their user id and the server id they activated will be stored in our database.</li>
<li><b>Prefixes:</b> When a user changes their prefix, their server id is stored in our database.</li>
</ul>
<div style={{padding:'20px'}}></div>
<h2 style={{fontWeight: 'bold'}}>
Data Storage Length</h2>
User cache is cleared minimum every 10 minutes to maximum 1 hour. All other user data is deleted upon request outlined later on in this document.
<div style={{padding:'20px'}}></div>
<h2 style={{fontWeight: 'bold'}}>
Disclosure Of Data</h2>
We care about your data. We will not give your user information to anyone outside of our company, other than in the belief that such action is necessary to:
<ul>
    <li>
Comply with a legal obligation</li><li>
Protect and defend the rights or property of Astro</li><li>
Prevent or investigate possible wrongdoing in connection with the Service</li>
<li>Protect the personal safety of users of the Service or the public</li><li>
Protect against legal liability</li>
</ul>
<div style={{padding:'20px'}}></div>
<h2 style={{fontWeight: 'bold'}}>
Requesting Data Deletion</h2>
To request your user data deletion, please email aoztanir25@gmail.com or join our support Discord server and directly message a developer to request data deletion. We may blacklist users who request data deletion to prevent their data from being stored again. If you are not blacklisted, you can request data deletion once every 30 days.


Requesting Your Data
To request a collection of your user data stored in our database, please email aoztanir25@gmail.com or join our support Discord server and directly message a developer. You can request your data once every 30 days, and it can take up to a month to collect your data.
<div style={{padding:'20px'}}></div>
<h2 style={{fontWeight: 'bold'}}>
Contact Us</h2>
If you have any questions, we're happy to answer them! please email aoztanir25@gmail.com or join our support Discord server to ask. We'll get back to you as soon as possible.

</p>
            </div>
        </div>
</div>
<div style={{padding: '40px'}}></div>  
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
