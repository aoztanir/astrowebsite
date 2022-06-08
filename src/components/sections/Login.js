import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Input from '../elements/Input';
import {Colors} from '../../colors.js';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import {GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



const clientId =
  '1099477592609-9vmt7pl1s2rjvl3iru1hs87muorsbuag.apps.googleusercontent.com';
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}
const {OAuth2Client} = require('google-auth-library');

const Hero = ({
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
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    if (user!=null){
      window.location.href = '/forum';
    }

  
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
  
  return (
    
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <span style={{color:Colors.primary, }} >  Dzidza </span> <span > For</span> <span style={{color:Colors.secondary}}>Zimbabwe</span>
            </h1>
            <div style={{paddingBottom: '30px',}}></div>
            <div  style ={{ padding: "30px" , borderRadius: '10px', backgroundColor: Colors.third}} className="container-xs">

              <div   className="reveal-from-bottom" data-reveal-delay="600">
                <div style={{padding: "3vw"}}>
              {/* <div style={{paddingBottom: '30px',}}></div> */}

              <Input style={{backgroundColor: Colors.backgroundLight, color: "white",  borderRadius:"20px"}} id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Email/Username">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
            <div style={{paddingBottom: '30px',}}></div>
            <Input style={{backgroundColor: Colors.backgroundLight, color: "white",borderRadius:"20px"}} id="newsletter" type="password" label="Subscribe" labelHidden hasIcon="right" placeholder="Password">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
            <div style={{paddingBottom: '50px',}}></div>
                <ButtonGroup>
                  <Button tag="a" style={{backgroundColor: Colors.primary}} wideMobile href="https://cruip.com/">
                    Sign in
                    </Button>
   
<GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                
  onSuccess={response => {
    const realUserData = getDecodedOAuthJwtGoogle(response.credential)
    // console.log(response.credential)
    realUserData.then(function(result) {
      // console.log(result.payload.name) // "Some User token"
      localStorage.setItem('user', JSON.stringify(result.payload));
      localStorage.setItem('loggedIn', true)
      console.log(JSON. parse(localStorage.getItem('user')).name)
      document.location.reload(true)
   })
    console.log(realUserData);
  }}
  onError={() => {
    console.log('Login Failed');
    localStorage.clear()
  }}
  auto_select
/></GoogleOAuthProvider>
               
         
                  {/* <Button tag="a" style={{ backgroundColor: Colors.primary}}  wideMobile href="/forum">
                    <span>Forum <i style={{paddingLeft:"5px"}} className="fas fa-arrow-right" /></span>
                    </Button> */}
                </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
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

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;