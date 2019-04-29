import React from 'react';
// import ReactDOM from 'react-dom';
import ServiceCard from './ServiceCard.js'
import { Grid,Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            requestedCardHeight:'auto',
            services:[],
            news:''
        }
    }

    componentDidMount(){
        this.cardHeightOnNumberPerPage(16);
        window.onresize = () => {
            this.cardHeightOnNumberPerPage(16);
        };
    }

    cardHeightOnNumberPerPage(numbersRequired){
        // /4 because we have 4 cards per row
        var rowNum = Math.ceil(numbersRequired / 4);
        var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        this.setState({requestedCardHeight:Math.floor((screenHeight-90)/rowNum)});

    }

    render(){

        return(
            <div style={{'padding':'8px'}}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                <Grid container spacing={8}>
                    {this.state.services.length > 0 ?
                    (
                        this.state.services.map((i,index)=>
                        <Grid item xs={3} key={index}>
                            <ServiceCard index={index} requestedHeight={this.state.requestedCardHeight} currentNumber={i.currentNumber} service_name={i.service_name}></ServiceCard>    
                        </Grid>)
                    ):
                    <Grid item xs={12} justify="center" container alignItems="center">
                        <CircularProgress style={{color:'white'}} />
                    </Grid>}
                    <Paper style={{width:'100%','height':'50px'}} className="newsbar"  elevation={1}>
                        <marquee  behavior="scroll" direction="right" style={{position:'fixed','marginBottom':'0px',fontSize:'35px',fontWeight:'bold','color':'#085b5a',paddingTop:'5px',paddingBottom:'5px'}}>
                        {this.state.news}
                        </marquee>
                    </Paper>
                </Grid>
            </div>
        );
    }
}


// ReactDOM.render( <App ref={(homeApp) => {window.homeApp = homeApp}} />, document.getElementById('root') ); 

