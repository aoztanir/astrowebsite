import React, { useState, useEffect, useRef } from 'react';

import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import {Colors} from '../../colors.js';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { HiOutlineChatAlt2 } from "react-icons/hi";

import { Box } from "@mui/system";




import { ToastContainer, toast } from 'react-toastify';

import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
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
import TagsInput from '../elements/TagsInput';
import ChipInput from "material-ui-chip-input";
import { DataArrayRounded } from '@mui/icons-material';

const styles = {
    textInput: {
      marginRight: '10px',
      color: "white",
      // #F3C677
    },
    textInputInput: {
      color: "white",
      // #F3C677
    },
  };
const MyTextField = styled(TextField)({
    '& input': {
     
        color: "white",
      },
    
    '& label.Mui-focused': {
      color: Colors.third,
      color: "white",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
      color: "white",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        backgroundColor: Colors.backgroundLight,
        color: "white",
      },
      '&:hover fieldset': {
        borderColor: Colors.gray,
        color: Colors.third,
      },
      '&.Mui-focused fieldset': {
        borderColor: Colors.third,
        color: "white",
      },
    },
  });

const clientId =
  '1099477592609-9vmt7pl1s2rjvl3iru1hs87muorsbuag.apps.googleusercontent.com';
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}
const {OAuth2Client} = require('google-auth-library');
// Add Chips

const ThreadComponent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
    const [tags, setTags] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [value, setValue] = React.useState('');
  const [date, setDate] = React.useState('loading...');
  useEffect(() => {
    var today = new Date()

    setDate(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
    setUser(JSON.parse(localStorage.getItem('user')))

  
  }, []); 

//   const handleAddChip = (chip) => {
//     setTags(tags.push(chip))
//   }
// Delete Chips
// const handleDeleteChip = (chip) => {
//     console.log(chip)
//     var index = tags.indexOf(chip);
//     var tagsTemp=tags
//     if (index > -1) {
//         tagsTemp.splice(index, 1); // 2nd parameter means remove one item only
//     }
//     setTags(tagsTemp)
//   }
function handleSelectedTags(items) {
    console.log(items);
    setTags(items);
  }
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


function submitPost(){
    toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
   
}


  if (props.form){

    

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    return (
    
        <
        >
    
          
              <div class="     py-2"style={{ backgroundColor: Colors.backgroundLighter, borderLeft: "0.25rem solid "+props.color, borderRadius: "5px",
    borderRight: "none",
    borderBottom: "none",
    borderTop: "none",
    textAlign: "left", padding: "10px"}} >
                  <Grid container spacing={2}>
            
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <div>
                    <span className='regularFont' style={{fontWeight: "bold"}}></span>
                    </div>
                    
                  <div style={{paddingBottom: "20px"}}>
                  <Chip
            avatar={<Avatar />}
            label={<span style={{fontWeight:'bold', color: "white"}}>Aryah</span>} style={{color:"white", backgroundColor: Colors.third}}
    
          />&nbsp;&nbsp;&nbsp;<span className='regularFont' style={{color:"white",fontWeight:"bold"}}>
              <div style={{ display: 'inline-block'}}>
              <Input style={{backgroundColor: Colors.backgroundLight, color: "white",  borderRadius:"20px"}} id="title"  labelHidden hasIcon="right" placeholder="Title"></Input>
              </div> </span>&nbsp;&nbsp;&nbsp;<Chip size="small"  style={{color:"black", backgroundColor: Colors.secondary}} label={<code style={{ fontSize:"13px", backgroundColor: "transparent",fontWeight: "bold",   color: "black"}}>{date}</code>}/>
                  
                  </div >
                  <Divider style={{backgroundColor: "white"}}/>
                  
                  <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                  
                  <Input type={"textarea"} style={{backgroundColor: Colors.backgroundLight, minHeight: "300px", color: "white",  borderRadius:"20px"}} id="question_body"  labelHidden hasIcon="right" placeholder="Your Question"></Input>
             
{/* 
    <p className="postFont" style={{color:"white"}}></p> */}
                  </div>
                  <Divider style={{backgroundColor: "white"}}/>
                  <div style={{paddingTop: "10px"}} >
                  <span style={{fontWeight:'bold', color: "white"}}> </span>
                  <div>
                  
                  <TagsInput
                  className="regularFont"
                  InputLabelProps={{style: {fontWeight: "bold",color: "white"}}}
                  inputProps={{ 
             
                 style: { fontWeight: "bold",color: "white", borderColor: "white"} }}
        selectedTags={handleSelectedTags}
        fullWidth
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="E.G. Math"
        label={<span>Tags and Topics</span>}
      />
                  <div style={{float: "right", paddingBottom: "25px", paddingTop: "25px"}}>
                  <Button onClick={submitPost} className="" tag="a" style={{ backgroundColor: Colors.primary}}  wideMobile>
              <span>Post <i style={{paddingLeft:"5px"}} className="fas fa-check" /></span>
              </Button>
              </div>
                      </div>
                  
                  {/* <Chip size="small"
           
           label={<span style={{fontWeight:'bold'}}>MATH</span>} style={{color:"black", backgroundColor: Colors.primary}}
         /> */}
                  </div>
                </Grid>
                {/* <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Remove
                  </Typography>
                </Grid> */}
              </Grid>
              <Grid item>
                <div className="badgeSmallScreen" >
              {/* <Badge sx={{
        "& .MuiBadge-badge": {
          color: "black",
          backgroundColor: Colors.primary,
          fontWeight: "bold"
        }
      }} badgeContent={2} max={99}> */}
              <Icon style={{color: "white"}} size={"medium"}><HiOutlineChatAlt2 />3</Icon>
              {/* </Badge> */}
         
                </div>
              </Grid>
            </Grid>
          </Grid>
              </div>
              
        </>
    
      );
  }






  return (
    
    <
    >

      
          <div class="     py-2"style={{ backgroundColor: Colors.backgroundLighter, borderLeft: "0.25rem solid "+props.color, borderRadius: "5px",
borderRight: "none",
borderBottom: "none",
borderTop: "none",
textAlign: "left", padding: "10px"}} >
              <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div>
                <span className='regularFont' style={{fontWeight: "bold"}}></span>
                </div>
                
              <div style={{paddingBottom: "20px"}}>
              <Chip
        avatar={<Avatar />}
        label={<span style={{fontWeight:'bold', color: "white"}}>Aryah</span>} style={{color:"white", backgroundColor: Colors.third}}

      />&nbsp;&nbsp;&nbsp;<span className='regularFont' style={{color:"white",fontWeight:"bold"}}>Need help with homeowkr 2</span>&nbsp;&nbsp;&nbsp;<Chip size="small"  style={{color:"black", backgroundColor: Colors.secondary}} label={<code style={{ fontSize:"13px", backgroundColor: "transparent",fontWeight: "bold",   color: "black"}}>3 min ago</code>}/>
              
              </div >
              <Divider style={{backgroundColor: "white"}}/>
              
              <div style={{paddingTop: "20px", paddingBottom: "10px"}}>
<p className="postFont" style={{color:"white"}}>The heat of formation of Fe2O3(s) is –826.0 kJ/mol. Calculate the heat of the reaction 4Fe(s) + 3O2(g) → 2Fe2 O3(s) when a 53.99-g sample of iron is reacted.</p>
              </div>
              <Divider style={{backgroundColor: "white"}}/>
              <div style={{paddingTop: "10px", paddingBottom: "10px"}} >
              <span style={{fontWeight:'bold', color: "white"}}> </span>
              
              <Chip size="small"
       
       label={<span style={{fontWeight:'bold'}}>Math</span>} style={{color:"black", backgroundColor: Colors.primary}}
     />
              </div>
              <div style={{paddingBottom: "20px"}}></div>
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
  }} badgeContent={2} max={99}>
          <Icon style={{color: "white"}} size={"medium"}><HiOutlineChatAlt2 />3</Icon>
          </Badge>
     
            </div>
          </Grid>
        </Grid>
      </Grid>
          </div>
          
    </>

  );
}

ThreadComponent.propTypes = propTypes;
ThreadComponent.defaultProps = defaultProps;

export default ThreadComponent;