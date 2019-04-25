import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ExitToApp from '@material-ui/icons/ExitToApp';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class App extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            loadingNext:false,
            loadingPrev:false,
            loadingCN:true,
            currentNumber: 0,
            serviceName:'-'
        }
    }
    render(){
        return(
            <ServiceManager loadingCN={this.state.loadingCN} serviceName={this.state.serviceName} loadingNext={this.state.loadingNext} loadingPrev={this.state.loadingPrev} currentNumber={this.state.currentNumber}></ServiceManager>
        )
    }
}

class ServiceManager extends React.Component{

    render(){

        return(
            <Grid container spacing={24} style={{textAlign:'center'}}>
                <Grid item md={3}></Grid>
                <Grid item md={6} xs={12}>
                    <Card>
                        <CardContent>
                           <h2 style={{fontFamily:'sans-serif','color':'#848484'}}>{this.props.serviceName}</h2>
                           <div>
                               {
                                   this.props.loadingCN
                                   ? <CircularProgress  size={40} color="primary" />
                                   : <Typography color="primary" style={{marginTop:'0px',fontSize:'100px','marginBottom':'5px','fontWeight':'bold'}}>{this.props.currentNumber}</Typography>
                               }
                           </div>
                        </CardContent>
                        <CardActions>
                            <CircularProgress style={{display:this.props.loadingNext || this.props.loadingPrev?'block':'none',marginLeft:'20px',marginBottom:'10px'}} size={25} color="primary" />
                            <Button id="nextBtn" style={{display:this.props.loadingNext || this.props.loadingPrev ? 'none':'inline-block'}} disabled={this.props.loadingNext} variant="contained" color="primary" size="medium">
                                Next
                            </Button>
                            <Button id="prevBtn" style={{display:this.props.loadingNext || this.props.loadingPrev ? 'none':'inline-block'}} disabled={this.props.loadingPrev} variant="outlined" color="primary" size="small">
                                Previous
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Fab id="backBtn" style={{color:'#038A88',backgroundColor:'white',position:'absolute','bottom':20,'right':20}} >
                    <ExitToApp></ExitToApp>
                </Fab>
            </Grid>            
        )
    }
}