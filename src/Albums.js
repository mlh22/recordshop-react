import React from "react";
import ReactDOM from "react-dom";
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


class Albums extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    //css styling for rendered items

    //styling for the "add to cart" button
    buttonstyle = {
        background: 'linear-gradient(45deg, #E671A4, #8E34B2, #2F69AC)',
        size: "small",
        border: 0,
        color: 'white',
        variant:"contained",
        margin:"0.5vw",
    };

    //sets the location of the button div
    buttdivstyle = {
        justifyContent: 'center'
    };

    //styling for individual card items
    cardstyle={
        width:"20vw",
        variant:"outlined",
        margin:"2vw"
    };

    //styling for the div containing all of the cards
    divstyle={
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding:"1vw",
        align:"center",
        justifyContent:"center",
        flexWrap: "wrap",

    }

    // obtains information from items in recordslist and formats them in the cards 
    createCard = item =>{
        return(
            <Card style={this.cardstyle}  align="center">
                <CardMedia  className="Img" component="img" style={{height: 200}} src={item.imagesrc} alt={item.alt}/>
                <CardContent>
                    <Typography variant="h4">{item.album}</Typography>
                    
                    <Typography component="p">Artist: {item.artist}</Typography>
                    <Typography component="p">Year of release: {item.year}</Typography>
                    <Typography component="p">Genre: {item.genre}</Typography>
                    <Typography component="p">Number of songs: {item.numsongs}</Typography>
                    {/* Purchase price determined by small calculations - 0.69 per song */}
                    <Typography component="p">Purchase price: ${(item.numsongs * 0.69).toFixed(2)}</Typography>
                    {/* separate div for button to allow for adding more buttons in the div, 
                     button links to function defined in App component */}
                    <div style={this.buttdivstyle}>
                        <Button value={item.album} style={this.buttonstyle} onClick={() => this.props.addToCart(item.album)}><AddIcon/>Add To Cart</Button>
                    </div>
                </CardContent>
            </Card>
        );
    };

    render(){
        const albumCards = this.props.list.map(this.createCard);
        return <div style={this.divstyle}>{albumCards}</div>;
    }
}


export default Albums;