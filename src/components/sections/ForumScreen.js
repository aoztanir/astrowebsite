import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import {Colors} from '../../colors.js';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import {GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Settings from './Settings.js'
import ForumLayout from './ForumLayout.js'


const clientId =
  '1099477592609-9vmt7pl1s2rjvl3iru1hs87muorsbuag.apps.googleusercontent.com';
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}
const {OAuth2Client} = require('google-auth-library');

const ForumScreen = ({
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
  const [screen, setScreen] = useState(null);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  useEffect(() => {
    var screenState = props.match.params.screen
    
    console.log(screenState)
    setScreen(screenState)
    setUser(JSON.parse(localStorage.getItem('user')))
    console.log(JSON.parse(localStorage.getItem('user')))
    if (JSON.parse(localStorage.getItem('user'))==null){
      setScreen(null)
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

  
  if (screen=="settings"){
    return <Settings />
  }
  return <ForumLayout/>
  
}

ForumScreen.propTypes = propTypes;
ForumScreen.defaultProps = defaultProps;

export default ForumScreen;