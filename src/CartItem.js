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

    cartitemstyle = {
        display: "flex",
        flexDirection: "column",
    }

    cardstyle={
        width:"70vw",
        margin:"2vw",
        display: "flex",
        flexDirection: "row",
    };

    buttonstyle = {
        background: 'linear-gradient(45deg, #E671A4, #8E34B2, #2F69AC)',
        size: "small",
        border: 0,
        color: 'white',
        variant:"contained",
        margin:"0.5vw",
    };

    imagestyle = {
        float:"left",
        width:"25vw",
    }

    infostyle = {
        float:"right",
        width:"45vw",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign:"center",
    }

    cardmediastyle = {
        display:"inline-block",
        verticalAlign:"center",
        width: "20vw", 
        height: "auto",
        paddingTop: '80%',
    }


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
                        <Typography component="p">Price per album: ${(item.numsongs * 0.69).toFixed(2)}</Typography>
                        <br />
                        <Typography component="p">Amount in Cart: {item.count}</Typography>
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
        return <div style={this.cartitemstyle} bgcolor="primary">{cartCards} </div>;
    }
}

export default CartItem