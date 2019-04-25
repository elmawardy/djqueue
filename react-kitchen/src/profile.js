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

export default class App extends React.Component
{

constructor(props){
    super(props);
    this.state = {
        auth:true,
        profileOpen:false,
        anchorEl:null,
        managedServices:[],
        username:'User'
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
                    this.state.managedServices.map((service)=>{
                       return <Grid item xs={12} md={3}>
                            <ServiceManageCard manageLink={service.href} service_name={service.service_name} currentNumber={service.currentNumber}></ServiceManageCard>
                        </Grid>
                    })
                }
            </Grid> : <CircularProgress size={30} style={{margin:'10px'}} color="primary" />}
            

            
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
                        </div>
                    </CardContent>
                </Card>
            </Fade>
        )
    }
}