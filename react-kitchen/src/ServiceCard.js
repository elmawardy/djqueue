import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grow } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { TimelineMax,TweenMax,CSSPlugin } from "gsap/all";

import './styles/servicecard.css'


const C = CSSPlugin;

export default class ServiceCard extends React.Component{


    constructor(props){
        super(props);
        this.myElement = null;
        this.tl = new TimelineMax({paused:true});
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (this.props.currentNumber!==nextProps.currentNumber){
            var audio = new Audio('/static/media/computer_bell.wav');
            audio.play();

            if (this.myElement!=null){

                // if (this.tl.isActive()) {
                //     this.tl.stop();
                //     this.tl.play();
                // }
                this.tl.to(this.myElement, 0.5, { scale: 1.5, opacity: 1, color: '#58b5b3' });
                this.tl.to(this.myElement, 0.7, { scale: 1, opacity: 1, color: '#038A88' });
                this.tl.repeat(10).play();
            }
        }
    }

    render(){

        let cardStyles ={
            opacity:this.props.currentNumber>0 ? 1 : 0.5,
            height: this.props.requestedHeight || 'auto'
        }
        let cardNameStyles = {
            lineHeight: (70*(this.props.requestedHeight * 55 / 144 )/100)+ 'px',
            fontSize: this.props.service_name.length>10 ? '40px' : this.props.requestedHeight * 55 / 144 + 'px',
        }

        let currentNumberStyle = {
            fontSize:this.props.requestedHeight * 95 / 144 + 'px',
            lineHeight:(70*(this.props.requestedHeight * 95 / 144 )/100)+ 'px',
            color:'rgb(3, 138, 136)'
        };

        return (
            <Grow in={true}>
                <Card style={cardStyles}>
                    <CardContent className="djQ_serviceCard">
                        {
                            this.props.currentNumber > 0 ? 
                            <p ref={p => this.myElement = p} className="djQ_serviceCurrentNumber" style={currentNumberStyle}>{this.props.currentNumber}</p>
                            :<img  alt="Remy Sharp" style={{height:'74px'}} src="static/media/logo0.jpg"  />
                        }
                        <Divider />
                        <strong>
                            <p style={cardNameStyles} className="djQ_serviceName">{this.props.service_name}</p>
                        </strong>
                    </CardContent>
                </Card>
            </Grow>
        );
    }
}