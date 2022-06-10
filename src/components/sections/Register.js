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
import { useAuthState } from 'react-firebase-hooks/auth';
import {GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import * as Api from "../../utils/Api";


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
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [videoModalActive, setVideomodalactive] = useState(false);
  useEffect(() => {
    if (Api.checkUser()){
      window.location.href = '/forum';
    }

  
  }, []);


  const [user, loading, error] = useAuthState(Api.auth);
  const handleRegister = (e) => {
    e.preventDefault();
    // if (!username) return alert("Please enter name");
    // if (!password) return alert("Please enter name");
    Api.registerWithEmailAndPassword("HI", username, password);
  };

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



  
  return (
    
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <span style={{color:Colors.primary, }} > Dzidza </span> <span > For</span> <span style={{color:Colors.secondary}}>Zimbabwe</span>
            </h1>
            <div style={{paddingBottom: '30px',}}></div>
            <div  style ={{ padding: "30px" , borderRadius: '10px', backgroundColor: Colors.third}} className="container-xs">

              <div   className="reveal-from-bottom" data-reveal-delay="600">
                <div style={{padding: "3vw"}}>
              {/* <div style={{paddingBottom: '30px',}}></div> */}
{/* <form onSubmit = {handleRegister}> */}
              {/* <Input  required onChange={(e) => setUsername(e.target.value)} style={{backgroundColor: Colors.backgroundLight, color: "white",  borderRadius:"20px"}} id="email" type="email" label="Login" labelHidden hasIcon="right" placeholder="Email/Username">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
            <div style={{paddingBottom: '30px',}}></div>
            <Input required onChange={(e) => setPassword(e.target.value)} style={{backgroundColor: Colors.backgroundLight, color: "white",borderRadius:"20px"}} id="password" type="password" label="PWD" labelHidden hasIcon="right" placeholder="Password">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input> */}
            <div style={{paddingBottom: '50px',}}></div>
                <ButtonGroup>
                  {/* <Button type="submit" style={{backgroundColor: Colors.primary}} onClick={handleRegister}>
                   Register
                    </Button> */}
                    <Button  style={{backgroundColor: Colors.primary}} onClick={ Api.signUserInWithGoogle}>
                  Sign in with Google
                    </Button>
                
                 
   
{/* <GoogleOAuthProvider clientId={Api.client_id}>
                    <GoogleLogin
                
  onSuccess={response => {Api.setUserGoogleLogin(response)}}
  onError={() => {
    console.log('Login Failed');
    localStorage.clear()
  }}
  auto_select
/></GoogleOAuthProvider> */}
               
         
                  {/* <Button tag="a" style={{ backgroundColor: Colors.primary}}  wideMobile href="/forum">
                    <span>Forum <i style={{paddingLeft:"5px"}} className="fas fa-arrow-right" /></span>
                    </Button> */}
                </ButtonGroup>
                {/* </form> */}
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