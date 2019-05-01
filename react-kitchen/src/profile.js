import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Fade,Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import SvgIcon from '@material-ui/core/SvgIcon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

export default class App extends React.Component
{

constructor(props){
    super(props);
    this.state = {
        auth:true,
        profileOpen:false,
        resetModal:false,
        anchorEl:null,
        managedServices:[],
        username:'User',
        toBresetCard:null,
        resettingCard:false
    }
}

handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  openResetModal = (cardData) =>{
    this.setState({resetModal:true,toBresetCard:cardData})
  }

  closeResetModal = () =>{
    this.setState({resetModal:false})   
  }

 render(){
    const open = Boolean(this.state.anchorEl);
    const styles = {
        root: {
          flexGrow: 1,
        },
        grow: {
          flexGrow: 1,
        },
        menuButton: {
          marginLeft: -12,
          marginRight: 20,
        },
    };


    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography style={styles.grow} variant="h6" color="inherit">
                    Profile
                </Typography>
                {this.state.auth && (
                <div>
                    <Button aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit">
                        Howdy {this.state.username}
                        <AccountCircle style={{marginLeft:'10px'}}/>
                    </Button>
                    <Menu
                    id="menu-appbar"
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                    >
                    <MenuItem id="chgPwdBtn">
                        <ListItemIcon >
                            <Lock />
                        </ListItemIcon>
                        <ListItemText  inset primary="Change Password" />
                    </MenuItem>
                    <MenuItem id="logoutBtn">
                        <ListItemIcon >
                            <ExitToApp />
                        </ListItemIcon>
                        <ListItemText  inset primary="Logout" />
                    </MenuItem>
                    </Menu>
                </div>
                )}
                </Toolbar>
            </AppBar>


            <Typography color="primary" style={{margin:'10px',marginTop:'30px',fontWeight:'bold'}} variant="h5" gutterBottom>
                My Services
            </Typography>


            {this.state.managedServices.length>0 ? <Grid container spacing={8} style={{padding:'10px',width:'100%'}} >
                {
                    this.state.managedServices.map((service,index)=>{
                       return <Grid item xs={12} md={3} key={index}>
                            <ServiceManageCard serviceID={service.id} handlerResetClose={this.closeResetModal} handlerResetOpen={this.openResetModal}  manageLink={service.href} service_name={service.service_name} currentNumber={service.currentNumber}></ServiceManageCard>
                        </Grid>
                    })
                }
            </Grid> : <CircularProgress size={30} style={{margin:'10px'}} color="primary" />}
            

            <Dialog
            open={this.state.resetModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.closeResetModal}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            >
            <DialogTitle id="alert-dialog-slide-title">
                {this.state.resettingCard? "Resetting ..." : "Service reset confirmation!"}
            </DialogTitle>
            {this.state.resettingCard?
            <div style={{padding:'20px'}}>
                <CircularProgress size={20} style={{marginLeft:'calc(50% - 10px)'}} color="primary" />
            </div>
            :
            <React.Fragment>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    Are you sure to reset the current number of {this.state.toBresetCard && <strong>{this.state.toBresetCard.service_name}</strong>}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closeResetModal} color="primary">
                    No
                    </Button>
                    <Button id="resetYesBtn" color="primary">
                    Yes
                    </Button>
                </DialogActions>
            </React.Fragment>
            }
            </Dialog>
            
        </div>
    )    
 }
}


class ServiceManageCard extends React.Component
{
    render(){
        return(
            <Fade timeout={1000} in={true}>
                <Card>
                    <CardContent style={{paddingBottom:'10px'}}>

                        <div style={{textAlign:'center'}}>
                            <Typography style={{color:'gray'}} variant="h6" color="inherit">
                                {this.props.service_name}
                            </Typography>
                            <Divider></Divider>
                            <Typography color="primary" variant="h1" style={{marginTop:'15px',marginBottom:'15px'}}>
                                {this.props.currentNumber}
                            </Typography>
                        </div>

                        <div>
                            <Button href={this.props.manageLink} variant="contained" style={{backgroundColor:'teal','color':'white'}}>
                                Manage
                            </Button>
                            <Button onClick={()=>this.props.handlerResetOpen({service_name:this.props.service_name,serviceID:this.props.serviceID})} variant="outlined" style={{marginLeft:'5px'}} color="primary">
                                Reset
                                <SvgIcon color="primary"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/><path d="M0 0h24v24H0z" fill="none"/>
                                </SvgIcon>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Fade>
        )
    }
}


function Transition(props) {
    return <Slide direction="up" {...props} />;
}