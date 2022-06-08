import React, { useState, useEffect } from 'react';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import Image from './Image';
import Modal from './Modal';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import {Colors} from '../../colors.js';
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

import Stack from '@mui/material/Stack';

const clientId =
  '1099477592609-9vmt7pl1s2rjvl3iru1hs87muorsbuag.apps.googleusercontent.com';
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}
const {OAuth2Client} = require('google-auth-library');

const PostComponent = ({
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
      <>
      
<a href="/forum" >
                        
          <div class=" itemTransformation itemTransform     py-2"style={{ backgroundColor: Colors.backgroundLighter, borderLeft: "0.25rem solid "+props.color, borderRadius: "5px",
borderRight: "none",
borderBottom: "none",
borderTop: "none",
textAlign: "left", padding: "10px"}} >
              <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div>
                <span className='regularFont' style={{fontWeight: "bold"}}>Need help with math hw page 2</span>
                </div>
                
              <div style={{paddingBottom: "10px"}}>
              
              <Chip size="small"
       
        label={<span style={{fontWeight:'bold'}}>Math</span>} style={{color:"black", backgroundColor: Colors.primary}}
      />
              </div >
              <Divider style={{backgroundColor: "white"}}/>
              <div style={{paddingTop: "25px"}} >
              <Chip
        avatar={<Avatar alt="Natacha" src={user.picture} />}
        label={<span style={{fontWeight:'bold', color: "white"}}>{user.name}</span>} style={{color:"white", backgroundColor: Colors.third}}

      />&nbsp;&nbsp;&nbsp;<Chip size="small"  style={{color:"black", backgroundColor: Colors.secondary}} label={<code style={{ fontSize:"13px", backgroundColor: "transparent",fontWeight: "bold",   color: "black"}}>3 min ago</code>}/></div>
            </Grid>
            {/* <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid> */}
          </Grid>
          <Grid item>
            <div className="badgeSmallScreen" >
          <Badge sx={{
    "& .MuiBadge-badge": {
      color: "black",
      backgroundColor: Colors.primary,
      fontWeight: "bold"
    }
  }} badgeContent={1000} max={99}>
          <Icon style={{color: "white"}} size={"medium"}><HiOutlineChatAlt2 />3</Icon>
          </Badge>
            {/* <Typography variant="subtitle1" component="div">
              $19.00
            </Typography> */}
            </div>
          </Grid>
        </Grid>
      </Grid>
          </div>

</a>
</>
  );

    
  }

PostComponent.propTypes = propTypes;
PostComponent.defaultProps = defaultProps;

export default PostComponent;














