import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import {Colors} from '../../colors.js';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'




import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';

// import { GoogleOAuthProvider } from '@react-oauth/google';
import Chip from '@mui/material/Chip';
import {GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import Input from '../elements/Input';
import ThreadComponent from './ThreadComponent'



const clientId =
  '1099477592609-9vmt7pl1s2rjvl3iru1hs87muorsbuag.apps.googleusercontent.com';
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}
const {OAuth2Client} = require('google-auth-library');
const maxDiv={maxWidth: "1200px",
    margin:" auto"}
const Post = ({
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
  const [form, setForm] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    console.log(props)
    console.log(props.match.params.id);
    if (props.match.params.id=="new"){
        setForm(true);
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
  if (form){
      return(
        <section
        {...props}
        className={outerClasses}
      >
  <div className="" style={maxDiv}>
        <div className={innerClasses}>
          <div className="">
                 <ThreadComponent form={true} /></div>
           </div>
           </div>
    </section>)
  }
  return (
    
    <section
      {...props}
      className={outerClasses}
    >

      <div className="" style={maxDiv}>
        <div className={innerClasses}>
          <div className="">
          <Timeline  position="right">
      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent  ><ThreadComponent/></TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent><ThreadComponent/></TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent><ThreadComponent/></TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent><ThreadComponent/></TimelineOppositeContent>
        
</TimelineItem>
    </Timeline>
    
           </div>
           </div>
           </div>
    </section>

  );
}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default Post;