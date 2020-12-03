import React from "react";
import ReactDOM from "react-dom";
import { Typography, Paper } from '@material-ui/core'
import CartItem from "./CartItem"

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    cartdivstyle = {
        justifyContent:"center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",

    }

    paperdivstyle = {
        align:"center",
        width: "80vw",
        margin:"2vw",
        padding: "1vw"
    }
    
    albumAmountCalc = () => {
        let numAlbums = 0;
        this.props.shoppingList.forEach(item => {
            numAlbums = numAlbums + item.count;
        });
        return numAlbums;
    }

    render(){
        const albumAmount = this.albumAmountCalc();
        return(
            <div style={this.cartdivstyle} bgcolor="primary">
                <Paper style={this.paperdivstyle}>
                    <Typography variant="h4">Your Cart Items</Typography>
                    <CartItem shoppingList={this.props.shoppingList} 
                                oneMoreAlbum={this.props.oneMoreAlbum} 
                                oneLessAlbum={this.props.oneLessAlbum} 
                                removeFromCart={this.props.removeFromCart}/>
                    <Typography variant="h6">{albumAmount} albums added in cart </Typography>
                    <Typography variant="h6">{this.props.totalSongs} track copies added in cart</Typography>
                    <Typography variant="h6"> Total: ${this.props.totalCost} </Typography>

                </Paper>
            </div>
        );
    }
}

export default Cart