import React from "react";
import ReactDOM from "react-dom";
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class NumItemButtons extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    buttonstyle = {
        background: 'linear-gradient(45deg, #E671A4, #8E34B2, #2F69AC)',
        size: "small",
        border: 0,
        color: 'white',
        variant:"contained",
        margin:"0.5vw",
    };

    buttdivstyle = {
        justifyContent: 'center'
    };

    render(){
        return(
            <div style={this.buttdivstyle}>
                <Button value={this.props.value} style={this.buttonstyle} onClick={this.props.addToCart(this.props.item, this.props.album)}><AddIcon/>Add</Button>
                <Button style={this.buttonstyle}><RemoveIcon/>Remove</Button>
            </div>
        );
    } 
}

export default NumItemButtons;