import React from "react";
import ReactDOM from "react-dom";
import { Typography, Card, CardContent, CardMedia, IconButton, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class CartItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    //styles the div object controlling display of all cards
    cartitemsstyle = {
        display: "flex",
        flexDirection: "column",
    }

    //styling for individual card and elements inside it
    cardstyle={
        width:"70vw",
        margin:"2vw",
        display: "flex",
        flexDirection: "row",
    };

    //styling for the "remove from cart" button
    buttonstyle = {
        background: 'linear-gradient(45deg, #E671A4, #8E34B2, #2F69AC)',
        size: "small",
        border: 0,
        color: 'white',
        variant:"contained",
        margin:"0.5vw",
    };

    //styling for image div, allowing for placement on the card
    imagestyle = {
        float:"left",
        width:"25vw",
    }

    //styling for div containing text and buttons, allowing for placement on the card
    infostyle = {
        float:"right",
        width:"45vw",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign:"center",
    }

    //sets ratios and sizes for images within the div in the card
    cardmediastyle = {
        display:"inline-block",
        verticalAlign:"center",
        width: "20vw", 
        height: "auto",
        paddingTop: '80%',
    }

    //creates cards by mapping information in an object in the shopping list and styling them accordingly
    createCartItems = item => {
        return(
            <Card align="center" style={this.cardstyle}>
                <div style={this.imagestyle}>
                    <CardMedia style={this.cardmediastyle} image={item.imagesrc} title={item.album} />
                </div>
                <div style={this.infostyle}>
                    <CardContent align="center">
                        <Typography variant="h4">{item.album}</Typography>
                        
                        <Typography component="p">Artist: {item.artist}</Typography>
                        {/* Purchase price determined by small calculations - 0.69 per song */}
                        <Typography component="p">Price per album: ${(item.numsongs * 0.69).toFixed(2)}</Typography>
                        <br />
                        <Typography component="p">Amount in Cart: {item.count}</Typography>
                        {/* Buttons link to functions defined in App component */}
                        <IconButton value={item.album} aria-label="add" onClick={() => this.props.oneMoreAlbum(item.album)}><AddIcon /></IconButton>
                        <IconButton value={item.album} aria-label="remove" onClick={() => this.props.oneLessAlbum(item.album)}><RemoveIcon /></IconButton>
                        <br />
                        <Button value={item.album} style={this.buttonstyle} onClick={()=> this.props.removeFromCart(item.album)}>Remove From Cart</Button>
                    </CardContent>
                </div>
            </Card>
        );
    };

    render(){
        const cartCards = this.props.shoppingList.map(this.createCartItems);
        return <div style={this.cartitemsstyle} bgcolor="primary">{cartCards} </div>;
    }
}

export default CartItem