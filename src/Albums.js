import React from "react";
import ReactDOM from "react-dom";
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


class Albums extends React.Component{
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

    cardstyle={
        width:"20vw",
        variant:"outlined",
        margin:"2vw"
    };

    divstyle={
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding:"1vw",
        align:"center",
        justifyContent:"center",
        flexWrap: "wrap",

    }

    createCard = item =>{
        return(
            <Card style={this.cardstyle}  align="center">
                <CardMedia  className="Img" component="img" style={{height: 200}} src={item.imagesrc}/>
                <CardContent>
                    <Typography variant="h4">{item.album}</Typography>
                    
                    <Typography component="p">Artist: {item.artist}</Typography>
                    <Typography component="p">Year of release: {item.year}</Typography>
                    <Typography component="p">Genre: {item.genre}</Typography>
                    <Typography component="p">Number of songs: {item.numsongs}</Typography>
                    <Typography component="p">Purchase price: ${(item.numsongs * 0.69).toFixed(2)}</Typography>
                    <div style={this.buttdivstyle}>
                        <Button value={item.album} style={this.buttonstyle} onClick={() => this.props.addToCart(item.album)}><AddIcon/>Add To Cart</Button>
                    </div>
                </CardContent>
            </Card>
        );
    };

    render(){
        //const img = require.context('/images', true);
        const albumCards = this.props.list.map(this.createCard);
        return <div style={this.divstyle}>{albumCards}</div>;
    }
}

// <CardMedia  className="Img" component="img" style={{height: 0, paddingTop: '56.25%'}} src={require(item.imagesrc)}/>

export default Albums;