import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import * as Api from "../../utils/Api";
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import QuestionComponent from '../elements/QuestionComponent';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import {Colors} from '../../colors.js';
import Icon from '@mui/material/Icon';
import { BiRocket } from "react-icons/bi";
import { trackPromise } from 'react-promise-tracker';
import { MdOutlineNewLabel } from "react-icons/md";
import IconButton from '@mui/material/IconButton';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { usePromiseTracker } from "react-promise-tracker";
import {

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
import { Divider } from '@mui/material';

const clientId =
  '1099477592609-9vmt7pl1s2rjvl3iru1hs87muorsbuag.apps.googleusercontent.com';
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}
const {OAuth2Client} = require('google-auth-library');

const ForumLayout = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [topQuestions, setTopQuestions]=useState([]);
  useEffect(() => {
    // trackPromise(
      trackPromise(
      Api.getQuestions().then((retVal)=>{
        setTopQuestions(retVal.top)
      }))
 
      // );
    // console.log(top)
    //   console.log(JSON.parse(Api.getQuestions()))
    setUser(JSON.parse(localStorage.getItem('user')))

  
  }, []); 
  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );


  const getDecodedOAuthJwtGoogle = async token => {

    const CLIENT_ID_GOOGLE = clientId
  
    try {
      const client = new OAuth2Client(CLIENT_ID_GOOGLE)
  
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID_GOOGLE,
      })
  
      return ticket
    } catch (error) {
      return { status: 500, data: error }
    }
  }
  const embedBorder = {
    borderLeft: "0.3rem solid royalblue ",
    borderRight: "none",
    borderBottom: "none",
    borderTop: "none",
    borderRadius: "7px",
    backgroundColor: Colors.backgroundLighter
  };
   const embedBorder2 = {
    borderLeft: "0.25rem solid gray ",
    borderRight: "none",
    borderBottom: "none",
    borderTop: "none",
    borderRadius: "10px",
    backgroundColor: Colors.backgroundLighter,
  };

const grayImg ={
   width: "50px",
   height:"50px", 
webkitFilter: "grayscale(100%)",
filter: "grayscale(100%)"
};
const { promiseInProgress } = usePromiseTracker();
 if (promiseInProgress){
   return <></>
 }
  return (
    
    <section
      {...props}
      className={outerClasses}
    ><div  className="newPostButton itemTransform itemTransformation">
    <a href="/forum?new">
    <IconButton  style={{color: Colors.primary, fontSize:"60px"}} size="large"  ><BsFillPlusCircleFill  /></IconButton></a></div>

      <div className="" style={{textAlign: 'left'}}>
        <div className={innerClasses}>
          <div className="" style={{textAlign: 'left'}}>
            <h1 className="mt-0 mb-16 " data-reveal-delay="200">
            <span style={{color:Colors.secondary}} ><Icon fontSize="large"> <BiRocket/></Icon> Top </span> <span > Questions</span>
            </h1>
            <Divider style={{backgroundColor: "white"}}/>
            <div className="container-xs" style={{paddingTop: "20px"}}>
              
              {/* <p className="m-0 mb-32 " data-reveal-delay="400">
                Connecting students across the globe to further their education
                </p>
              <div className="" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" style={{ backgroundColor: Colors.primary}}  wideMobile href="/forum">
                    <span>Forum <i style={{paddingLeft:"5px"}} className="fas fa-arrow-right" /></span>
                    </Button>
                </ButtonGroup>
              </div> */}
            </div>
          </div>
       

       <Grid container spacing={5}>
          {topQuestions.map((question, index) => {
     
      return (
          <Grid item xs={12} md={6}  lg={4} >
          <QuestionComponent color={Colors.secondary} title={question.title} date="2/30/22" author="aryah" />
          </Grid>
      );

    })}
 </Grid>
 <div style={{paddingTop: "50px"}}></div>
 <h1 className="mt-0 mb-16 " data-reveal-delay="200">
            <span style={{color:Colors.primary}} ><Icon fontSize="large"> <MdOutlineNewLabel/></Icon> New </span> <span > Questions</span>
            </h1>
            <Divider style={{backgroundColor: "white"}}/>
            <div style={{paddingTop: "20px"}}></div>
            
            <Grid container spacing={5}>
          {["", "", "", "", "", "", "", "", "", ].map((item, index) => {
     
      return (
          <Grid item xs={12} md={6}  lg={4} >
          <QuestionComponent color={Colors.primary} title="Question??" date="2/30/22" author="aryah" />
          </Grid>
      );

    })}
 </Grid>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>

  );
}

ForumLayout.propTypes = propTypes;
ForumLayout.defaultProps = defaultProps;

export default ForumLayout;