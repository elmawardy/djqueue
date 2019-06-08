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
import IconButton from '@material-ui/core/IconButton';
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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
        langMenu:null,
        username:'User',
        toBresetCard:null,
        resettingCard:false,
        currentLang:'عربي',
        allLangs:[{'lang':'ar',native:'عربي','dir':'rtl',dic:{yes:'نعم','no':'لا','confirmResetMsg':'هل انت متأكد من تصفير رقم ',resetConfirmation:'تأكيد التصفير',resetting:'جاري التصفير ...',manage:'ادارة',reset:'تصفير',logout:'تسجيل الخروج',welcome:'مرحبا',profile:'الصفحة الشخصية',myServices:'الخدمات',changePassword:'تغيير كلمة المرور'}},
        {'lang':'en',native:'english','dir':'ltr',dic:{yes:'Yes','no':'No','confirmResetMsg':'Are you sure to reset the number of ',resetConfirmation:'Reset Confirmation',resetting:'Resetting ...',manage:'Manage',reset:'Reset',logout:'Logout',welcome:'Welcome',profile:'Profile',myServices:'My Services',changePassword:'Change Password'}}],
        lang:{'lang':'ar','dir':'rtl',dic:{yes:'نعم','no':'لا','confirmResetMsg':'هل انت متأكد من تصفير رقم ',resetConfirmation:'تأكيد التصفير',resetting:'جاري التصفير ...',manage:'ادارة',reset:'تصفير',logout:'تسجيل الخروج',welcome:'مرحبا',profile:'الصفحة الشخصية',myServices:'الخدمات',changePassword:'تغيير كلمة المرور'}}
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
    console.log(this.langNatives());
  }

  closeResetModal = () =>{
    this.setState({resetModal:false})   
  }

  langNatives = () => {
      return this.state.allLangs.map((lang)=>{
          return lang.native
      })
  }

  getDataofLang = (lang) =>{
      let chosenLang = {};
      for (var i=0;i<this.state.allLangs.length;i++)
        {
            if (this.state.allLangs[i].native === lang)
                chosenLang = this.state.allLangs[i];
        }
      return chosenLang;
  }

  handleLangChange = event =>{
    let nextLang = this.getDataofLang(event.target.innerText)
    this.setState({ currentLang: event.target.value,lang:nextLang});
    this.setState({langMenu:false})
    document.getElementsByTagName('body')[0].setAttribute('dir',nextLang.dir);
  }

  handleLangChangeOpen = event => {
    this.setState({ langMenu: event.currentTarget });
  };
  closeLangMenu = () =>{
    this.setState({ langMenu: false });
  }

 render(){
    const open = Boolean(this.state.anchorEl);
    const langMenuOpen = Boolean(this.state.langMenu);
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

    const theme = createMuiTheme({
        direction: this.state.lang.dir,
        typography: {
            useNextVariants: true,
          },
      });

    return(
        <MuiThemeProvider theme={theme}>
            <div dir={{'dir':this.state.lang.dir}}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography style={styles.grow} variant="h6" color="inherit">
                        {this.state.lang.dic.profile}
                    </Typography>

                    <div>
                        <IconButton
                            aria-owns={langMenuOpen ? 'menu-lang' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleLangChangeOpen}
                            >
                            <svg fill="white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>
                        </IconButton>
                        <Menu
                        id="menu-lang"
                        open={langMenuOpen}
                        anchorEl={this.state.langMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        onClose={this.closeLangMenu}>
                        {
                            this.langNatives().map((lang)=>{
                                return <MenuItem onClick={this.handleLangChange} key={lang}>{lang}</MenuItem>
                            })
                        }
                        </Menu>
                    </div>
                    {this.state.auth && (
                    <div>
                        <Button aria-owns={open ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit">
                            {this.state.lang.dic.welcome} {this.state.username}
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
                            <ListItemText  inset primary={this.state.lang.dic.changePassword} />
                        </MenuItem>
                        <MenuItem id="logoutBtn">
                            <ListItemIcon >
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText  inset primary={this.state.lang.dic.logout} />
                        </MenuItem>
                        </Menu>
                    </div>
                    )}
                    </Toolbar>
                </AppBar>


                <Typography color="primary" style={{margin:'10px',marginTop:'30px',fontWeight:'bold'}} variant="h5" gutterBottom>
                    {this.state.lang.dic.myServices}
                </Typography>


                {this.state.managedServices.length>0 ? <Grid container spacing={8} style={{padding:'10px',width:'100%'}} >
                    {
                        this.state.managedServices.map((service,index)=>{
                        return <Grid item xs={12} md={3} key={index}>
                                <ServiceManageCard lang={this.state.lang} serviceID={service.id} handlerResetClose={this.closeResetModal} handlerResetOpen={this.openResetModal}  manageLink={service.href} service_name={service.service_name} currentNumber={service.currentNumber}></ServiceManageCard>
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
                    {this.state.resettingCard? this.state.lang.dic.resetting : this.state.lang.dic.resetConfirmation}
                </DialogTitle>
                {this.state.resettingCard?
                <div style={{padding:'20px'}}>
                    <CircularProgress size={20} style={{marginLeft:'calc(50% - 10px)'}} color="primary" />
                </div>
                :
                <React.Fragment>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                        {this.state.lang.dic.confirmResetMsg} {this.state.toBresetCard && <strong>{this.state.toBresetCard.service_name}</strong>}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeResetModal} color="primary">
                        <strong>{this.state.lang.dic.no}</strong>
                        </Button>
                        <Button id="resetYesBtn" color="primary">
                        <strong>{this.state.lang.dic.yes}</strong>
                        </Button>
                    </DialogActions>
                </React.Fragment>
                }
                </Dialog>
                
            </div>
        </MuiThemeProvider>
    )    
 }
}


class ServiceManageCard extends React.Component
{
    render(){

        const manageBtnStyle = {
            backgroundColor:'teal','color':'white',
            marginLeft:this.props.lang.dir==='rtl' ? '0px':'5px'    
        }
        const resetBtnStyle = {
            marginRight:this.props.lang.dir==='rtl' ? '5px':'0px'  
        }

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
                            <Button href={this.props.manageLink} variant="contained" style={manageBtnStyle}>
                                {this.props.lang.dic.manage}
                            </Button>
                            <Button onClick={()=>this.props.handlerResetOpen({service_name:this.props.service_name,serviceID:this.props.serviceID})} variant="outlined" style={resetBtnStyle} color="primary">
                                {this.props.lang.dic.reset}
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