import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ForumScreen from './ForumScreen';
import {Colors} from '../../colors.js';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from '../layout/partials/Logo';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';

import ListItemIcon from '@mui/material/ListItemIcon';

import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdLightbulbOutline } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";

import { FiPlusSquare } from "react-icons/fi";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import CssBaseline from '@mui/material/CssBaseline';
import ForumIcon from '@mui/icons-material/Forum';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import LogoutIcon from '@mui/icons-material/Logout';
import {TbLogout} from "react-icons/tb";
import {RiSettings3Line} from "react-icons/ri";

import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';

import MoreIcon from '@mui/icons-material/MoreVert';
import {  alpha } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import './SmallScreen.css';
import { useState, useEffect } from 'react';

import Input from '../elements/Input';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-router-dom';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    background: Colors.primary,
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const drawerWidth = 240;

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const GenericSection = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));



const [user, setUser]=useState(JSON.parse(localStorage.getItem('user')));
const [path, setPath]=useState(props.match.params.screen)
  
  const [links, setLinks] = useState([])
  function getHighlighted(item){
    if (item.href==path){
      return {
        backgroundColor: Colors.primary
      }

    }
    return {}

  }
  function getHiddenNewButton(){
    if (path=="/forum"){
      return {}
    }
    return {display:"none"}
  }
  useEffect(() => {
    var screenState = props.match.params.screen
    
    if( screenState==null){
      setPath("/forum")
    }
    else{
      setPath("/forum/"+screenState)
    }
    setUser(JSON.parse(localStorage.getItem('user')))
    console.log(user)
    // Update the document title using the browser API
    var linkTemp = []
    var size="medium"
    const iconStyles={color:"white"}
    linkTemp.push({"name": "Forum",color: iconStyles.color, "Icon": <IconButton style={iconStyles} size={size}><HiOutlineChatAlt2 /></IconButton> , "href": "/forum"})
    // linkTemp.push({"name": "Ask", "Icon": <IconButton style={iconStyles} size={size}><FiPlusSquare  /></IconButton>,  "href": "/forum?new" })
    
    if (localStorage.getItem("user")!=null){
      linkTemp.push({"name": "Your Threads",color: iconStyles.color, "Icon": <IconButton style={iconStyles} size={size}><BiMailSend /></IconButton>,  "href": "/forum/userthreads" })
      linkTemp.push({"name": "Notifications",color: iconStyles.color, "Icon": <IconButton style={iconStyles} size={size}><RiNotification3Line/></IconButton>,  "href": "/forum/notifications" })
      linkTemp.push({"name": "Settings",color: iconStyles.color, "Icon": <IconButton style={iconStyles} size={size}><RiSettings3Line/></IconButton>,  "href": "/forum/settings" })
      linkTemp.push({"name": "Logout", color: Colors.secondary, "Icon": <IconButton style={{color: Colors.secondary}} size={size}><TbLogout  /></IconButton>,  "href": "/logout" })
    }
    linkTemp.push({"name": "About",color: iconStyles.color, "Icon": <IconButton  style={iconStyles} size={size}><MdLightbulbOutline  /></IconButton>,  "href": "/" })
    
    
    setLinks(linkTemp)

  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div style={getHiddenNewButton()} className="newPostButton itemTransform itemTransformation">
      <a href="/forum?new">
      <IconButton  style={{color: Colors.primary, fontSize:"60px"}} size="large"  ><BsFillPlusCircleFill  /></IconButton></a></div>
      <div>
      {/* <div className="container"> */}
        <div className={innerClasses}>
          {children}
          <Box sx={{ display: 'flex' }}>
      
      <AppBar style={{ backgroundColor: Colors.backgroundLighter}} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            
            <MenuIcon />
          </IconButton>
          <Logo />
          <div style={{paddingLeft: '10px' , paddingRight: '10px'}}className="smallscreen">
          
          <h4   ><span style={{fontWeight: '1000',fontSize: '27px'}}>
            <a  style={{color: Colors.primary}} href="/forum"><span style={{color:Colors.primary}} > Dzidza </span> <span style={{color:"white"}} > For</span> <span style={{color:Colors.secondary}}>Zimbabwe</span></a>
            </span></h4></div>
          
            <div style={{paddingLeft: '10px' , paddingRight: '10px'}}className="">
            <div style={{paddingLeft: '10px' , paddingRight: '10px'}}className="smallscreen">
            
            {/* <Input>
            <SearchIconWrapper>
             
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />ads

          </Input> */}
         </div>
         <Input className="inputSelectionPrimary" style={{fontWeight: "bold", backgroundColor: Colors.backgroundLight, color: "white",  borderRadius:"20px"}}  hasIcon="left" placeholder="Search Questions">
              {/* <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg> */} <  SearchIcon style={{color: Colors.primary}}/>
            </Input></div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex'  }}>
          {(() => {
        switch (user) {
          case null:
            return (<Link to="/login" style={{backgroundColor: Colors.third, color: "white"}} className="button button-wide-mobile button-sm" > <span> Sign Up <i style={{paddingLeft:"5px"}} className="fas fa-arrow-right" /></span></Link>

            );
          default:
            return (
              <>
              <div className="smallscreen">
              <Tooltip style={{fontWeight: 'bold'}} title={<span style={{fontWeight: "bold"}}>Your Threads</span>}>
                <a href="/forum/userthreads">
              <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
             
                <BiMailSend style={{color: Colors.secondary}} />
 
            </IconButton></a>
            </Tooltip>
            <Tooltip style={{fontWeight: 'bold'}} title={<span style={{fontWeight: "bold"}}>Notifications</span>}>
            <a href="/forum/notifications">
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={<span style={{fontWeight:"bold"}}>4</span>} color="error">
               
                <RiNotification3Line style={{color: Colors.primary}} />
              </Badge>
              
            </IconButton>
            </a>
            </Tooltip></div>
            
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            <Tooltip style={{fontWeight: 'bold'}} title={<span style={{fontWeight: "bold"}}>Account settings</span>}>
          <IconButton
            onClick={handleClick}
            size="small"
            
            sx={{ ml: 2 }}
            aria-controls={openMenu ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
          >
            <Avatar src={user.picture} sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openMenu}
        onClose={handleClose}
        onClick={handleClose}

        PaperProps={{
          
          elevation: 0,
          sx: {

            color: "white",
            fontWeight: "bold",
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            backgroundColor:  Colors.gray,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor:  Colors.gray,
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem>
          <Avatar style={{color: "white"}} style={{}} /> <span style={{fontSize: "15px", fontWeight: "bold"}}>Profile</span>
        </MenuItem> */}
        {/* <MenuItem>
          <Avatar /> My account
        </MenuItem> */}
        {/* <Divider style={{backgroundColor: "white"}} /> */}
        {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <a href="/forum/settings">
        <MenuItem >
        <ListItemIcon>
        <IconButton size="medium"> 
         
            <RiSettings3Line style={{color: "white"}} />
         
          </IconButton> </ListItemIcon>
          <span style={{fontSize: "17px", fontWeight: "bold"}}>Settings</span>
        </MenuItem></a>
        <a href="/logout">
        <MenuItem  >
          <ListItemIcon>
          <IconButton size="medium"> <TbLogout style={{color: Colors.secondary}}  /></IconButton>
          </ListItemIcon>
          <span style={{fontSize: "17px", fontWeight: "bold", color: Colors.secondary}}>Logout</span>
        </MenuItem></a>
      </Menu>
      </>
            );
        }
      })()}
            
          </Box>
         
        </Toolbar>
      </AppBar>

      <Drawer PaperProps={{

sx: {
  backgroundColor: Colors.third,
  color: "white"
}
}}
variant="permanent" open={open}>
        <div > 
        <DrawerHeader >
        {(() => {
        switch (open) {
          case true:
            return ( <IconButton style={{color: "white"}} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>)
          case false:
            return <MenuIcon />
        }
      })()}
        
         
          
        </DrawerHeader>
        <div style={{paddingTop:"30px"}}></div>
        {/* <Divider style={{backgroundColor:'white'}} /> */}
        <List >
          
        {links.map((item, index) => (
          <>
            <ListItem style={getHighlighted(item)} to="/" key={item.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  // minHeight: 48,
                  paddingRight: "5px",
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                to={item.href}
              >
                <ListItemIcon
                
                  sx={{
                    color: "white",
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                ><span style={{color: "white"}}>
     {item.Icon}
     </span>
                </ListItemIcon>
                {(() => {
        switch (open) {
          case true:
            return <span style={{fontWeight: "1000", fontSize:"20px", color: item.color}} >{item.name}</span>
          case false:
            return <></>
        }
      })()}
                
              </ListItemButton>
            </ListItem>
            {/* <Divider style={{backgroundColor:'white'}} /> */}
       </>
                ))}

        </List>
        
     
        </div>
      </Drawer>
      
      <Box className="paddingSmallScreenForum" sx={{ flexGrow: 1, }}>
 
        {/* <DrawerHeader /> */}
        <ForumScreen {...props}/>
      </Box>
    </Box>
        </div>
      </div>
    </section>
  );
}

GenericSection.propTypes = propTypes;
GenericSection.defaultProps = defaultProps;

export default GenericSection;