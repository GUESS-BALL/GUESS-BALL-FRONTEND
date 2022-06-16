import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { AccountBalanceWalletOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';
import im1 from "./userProfileImg.jpg";
import DialogActions from '@mui/material/DialogActions';
import { DialogContent } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
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


const axios = require('axios')

export default function NavbarDB() {
  const [userprofile, setUserProfile] = useState({ id: null, email: "", password: null, coinbalance: null, accuracy: null, gamesplayed: null, role: "", firstname: "", lastname: "", dob: "" })
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt == "" || cookies.jwt == null) {
      navigate('/login');
    }

    axios.get(`${localStorage.getItem('server')}/getLeaderboard/${cookies.jwt}`)
      .then((res: { data: any; }) => {
        setUserProfile(res.data)
        console.log(res.data)
      }).catch((err: any) => { console.log("Error found") });

  }, [])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [role, setRole, removeRole] = useCookies(['role']);

  const logOut = () => {
    setCookie('jwt', '');
    setRole('role','');
    localStorage.setItem('username','');
    navigate('/login');
  }
  const playerHistory = () => {
    navigate('/playerhistory');
  }

  const matchhistory = () => {
    navigate('/MatchSelect');
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // const Transition = React.forwardRef(function Transition(
  //   props: TransitionProps & {
  //     children: React.ReactElement<any, any>;
  //   },
  //   ref: React.Ref<unknown>,
  // ) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem></MenuItem>
      <MenuItem onClick={playerHistory}>Player History</MenuItem>
      <MenuItem onClick={matchhistory}>Match Leaderboard</MenuItem>
      <MenuItem onClick={handleClickOpen}>User Profile</MenuItem>
      <MenuItem onClick={logOut}>Logout</MenuItem>

    </Menu>
  );


  return (
    <>
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogContent>
          <div className="fcontainer">
              <div className="f-topBar">
                <h2>Coin Balance : {userprofile.coinbalance}</h2>
              </div>

              <div className="f-bottomBar">
                <div className="f-bottomLeftBar">
                  <img src={im1} className="rounded-circleNew"></img>
                  <div className="leftBar-stat">
                    <h3>Role : <b>User</b></h3>
                    <h3>Player ID : {userprofile.id}</h3>
                    <h3>Game Played : {userprofile.gamesplayed}</h3>
                    <h3>Accuracy : {userprofile.accuracy}%</h3>
                  </div>
                </div>

                <div className="f-bottomRightBar">
                  <h1>User Profile</h1>
                  <div className="profileContent">
                    <div className="profileCell">
                      <p className="cellName"><b>First Name</b></p>
                      <input
                        className="cellValue"
                        type="text"
                        value={userprofile.firstname}
                        name="firstName"
                        disabled
                      />
                    </div>

                    <div className="profileCell">
                      <p className="cellName"><b>Last Name</b></p>
                      <input
                        className="cellValue"
                        type="text"
                        value={userprofile.lastname}
                        name="lastName"
                        disabled
                      />
                    </div>

                    <div className="profileCell">
                      <p className="cellName"><b>Email</b></p>
                      <input
                        className="cellValue"
                        type="text"
                        value={userprofile.email}
                        name="email"
                        disabled
                      />
                    </div>

                    <div className="profileCell">
                      <p className="cellName"><b>DOB(DD/MM/YYYY)</b></p>
                      <input
                        className="cellValue"
                        type="date"
                        value={userprofile.dob}
                        name="dob"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Ok
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>

      <AppBar position="static" sx={{ backgroundColor: 'lightblue', display: 'inline-flex', height:'75px' }}>
        <Toolbar>
          <Typography
            variant="h4"
            // noWrap
            // component="div"
            sx={{ display: { xs: 'none', sm: 'block', color: 'darkblue' ,marginLeft:'7%' } }}
          >
            <strong><a onClick={()=>{navigate('/userdashboard')}} >GUESS BALL</a></strong>
          </Typography>
          <Box sx={{ flexGrow: 4 }} />

          <Box sx={{ flexGrow: 1, display: 'contents' }}>
            <AccountBalanceWalletOutlined fontSize='large' sx={{ color: 'green' , marginLeft:'32%'}} />
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', color: 'black' , margin:'15px'} }}
            >
              {userprofile.coinbalance}
            </Typography>
          </Box>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Box sx={{ display: { xs: 'none', md: 'flex', flexGrow: 1, marginLeft: '40px'} }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize='large' sx={{ color: 'black' }} />
              <p style={{ color: 'black', margin:'15px' }}>{(userprofile.firstname + " " + userprofile.lastname)}</p>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  );
}