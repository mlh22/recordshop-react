import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import FilteredList from './FilteredList';
import {Typography} from '@material-ui/core';
import Cart from './Cart';
import Turntable from './assets/turntable.jpg';
import Nightopera from './assets/nightopera_cover.png';
import Dystopia from './assets/dystopia_cover.jpg';
import Nevermind from "./assets/nevermind_cover.jpg";
import Positions from "./assets/positions_cover.png";
import Reality from "./assets/realityinblack.png";
import Red from "./assets/red_cover.jpg";
import Riot from "./assets/riot_cover.png";
import SgtPepper from "./assets/sgtpepper_cover.jpg";
import BlackParade from "./assets/blackparade_cover.jpg";
import FameMon from "./assets/famemonster_cover.jpg";
import Misconceptions from "./assets/misconceptions_cover.jpg";
import Wings from "./assets/wings_cover.jpg";


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      shoppedItems: [],

      addedItem: {
          album:"", 
          artist:"", 
          year:0, 
          decade:"", 
          genre:"", 
          numsongs:0, 
          count:0, 
          imagesrc:""
      },

      totalCost: 0,
      totalSongs: 0,
    };

  }

  recordslist = [
    {album:"A Night at the Opera", artist:"Queen", year:1975, decade:"19-anything", genre:"rock", numsongs:12, count:0, imagesrc:Nightopera},
    {album:"Dystopia: The Tree of Language", artist:"Dreamcatcher", year:2020, decade:"2020", genre:"kpop", numsongs:13, count:0, imagesrc:Dystopia},
    {album:"Nevermind", artist:"Nirvana", year:1991, decade:"19-anything", genre:"rock", numsongs:13, count:0, imagesrc:Nevermind},
    {album:"positions", artist:"Ariana Grande", year:2020, decade:"2020", genre:"pop", numsongs:14, count:0, imagesrc:Positions},
    {album:"reality in BLACK", artist:"Mamamoo", year:2019, decade:"2010", genre:"kpop", numsongs:11, count:0, imagesrc:Reality},
    {album:"Red", artist:"Taylor Swift", year:2012, decade:"2010", genre:"pop", numsongs:16, count:0, imagesrc:Red},
    {album:"Riot!", artist:"Paramore", year:2007, decade:"2000", genre:"rock", numsongs:12, count:0, imagesrc:Riot},
    {album:"Sgt. Pepper's Lonely Hearts Club Band", artist:"The Beatles", year:1967, decade:"19-anything", genre:"pop", numsongs:13, count:0, imagesrc:SgtPepper},
    {album:"The Black Parade", artist:"My Chemical Romance", year:2006, decade:"2000", genre:"rock", numsongs:14, count:0, imagesrc:BlackParade},
    {album:"The Fame Monster", artist:"Lady Gaga", year:2009, decade:"2000", genre:"pop", numsongs:23, count:0, imagesrc:FameMon},
    {album:"The Misconceptions of Us", artist:"Shinee", year:2013, decade:"2010", genre:"kpop", numsongs:20, count:0, imagesrc:Misconceptions},
    {album:"Wings", artist:"BTS", year:2016, decade:"2010", genre:"kpop", numsongs:15, count:0, imagesrc:Wings},
  ];
  

  priceCalc = list => {
    let price = 0;
    list.forEach(item => {
        let indivprice = (item.numsongs * 0.69 * item.count);
        price = price + indivprice;
    });
    let totalCost = price.toFixed(2);
    this.setState({ totalCost })
  }

  songCalc = list => {
    let totalSongs = 0;
    list.forEach(item => {
      let indivSongs = (item.numsongs * item.count);
      totalSongs = totalSongs + indivSongs;
    });
    this.setState({ totalSongs })
  }

  addToCart = album=>{
    if (!this.state.shoppedItems.find(item => item.album === album)){
      const product = this.recordslist.find(item => item.album === album);
      const addedItem = {
        album: product.album,
        artist: product.artist,
        year: product.year,
        decade: product.decade,
        genre: product.genre,
        numsongs: product.numsongs,
        count: 1,
        imagesrc: product.imagesrc,
      }
      const shoppedItems = [...this.state.shoppedItems, addedItem];
      this.setState({ shoppedItems });
      this.priceCalc(shoppedItems);
      this.songCalc(shoppedItems);
    }
  };

  oneMoreAlbum = album=>{
    const alreadyInCart = this.state.shoppedItems.find(
      item => item.album === album
    );
    const shoppedItems = this.state.shoppedItems;
    const prevCount = alreadyInCart.count; 
    const addedItem = {
      album: alreadyInCart.album,
      artist: alreadyInCart.artist,
      year: alreadyInCart.year,
      decade: alreadyInCart.decade,
      genre: alreadyInCart.genre,
      numsongs: alreadyInCart.numsongs, 
      count: prevCount+1,
      imagesrc: alreadyInCart.imagesrc,
    }
    const index = this.state.shoppedItems.indexOf(alreadyInCart);
    if (index !== -1){
      shoppedItems[index] = addedItem;
    }
    this.setState({ addedItem });
    this.setState({shoppedItems});  
    this.priceCalc(shoppedItems);
    this.songCalc(shoppedItems);

  }

  oneLessAlbum = album =>{
    const alreadyInCart = this.state.shoppedItems.find(
      item => item.album === album
    );
    const prevCount = alreadyInCart.count;
    if (prevCount >= 2){
      const prevShoppedItems = this.state.shoppedItems.filter(
        item => item.album !== album
      );
      const addedItem = {
        album: alreadyInCart.album,
        artist: alreadyInCart.artist,
        year: alreadyInCart.year,
        decade: alreadyInCart.decade,
        genre: alreadyInCart.genre,
        numsongs: alreadyInCart.numsongs, 
        count: prevCount-1,
        imagesrc: alreadyInCart.imagesrc,
      }
      this.setState({ addedItem });
      const shoppedItems = [addedItem, ...prevShoppedItems];
      this.setState({shoppedItems});
      this.priceCalc(shoppedItems);
      this.songCalc(shoppedItems);
    } ; 

  }

  removeFromCart = album=>{
    const shoppedItems = this.state.shoppedItems.filter(
      item => item.album !== album
    );
    this.setState({ shoppedItems });
    this.priceCalc(shoppedItems);
    this.songCalc(shoppedItems);
  }


  bigdivstyle = {
    backgroundColor: "#fcce95",
    width: "80%",
    height: "100%",
    margin: "auto",
    align:"center",
  };

  titlestyle = {
    textAlign:"center",
    padding:"1vw",
    margin:"0"
  }

  cardliststyle = {
    display:"flex",
  }

  cartdivstyle = {
    width: "100%",
  }

  content = {
    padding: "2vw",
  }

  headerstyle = {
    height:"50vh",
    overflow:"auto",
    left:"0px",
    right:"0px",
  }

  headerimage = {
    width:"100%",
    height:"45vh",
  }




  render(){
    return(
      <div style={this.bigdivstyle}>
        <header style={this.headerstyle}>
          <img style={this.headerimage} src={Turntable} alt="turntables header"></img>
        </header>
        <div style={this.titlestyle}>
            <h2 className="title">RR    Record    Shop</h2>
            <Typography variant="h5">Music that makes happiness, at prices that make sense</Typography>
        </div>
        <div style={this.content}>
            <br></br>
          <div>
            <FilteredList style={this.cardliststyle} list={this.recordslist} addToCart={this.addToCart}></FilteredList>
          </div>
          <div style={this.cartdivstyle}>
            <Cart shoppingList={this.state.shoppedItems} 
                  oneMoreAlbum={this.oneMoreAlbum} 
                  oneLessAlbum={this.oneLessAlbum} 
                  removeFromCart={this.removeFromCart}
                  totalCost={this.state.totalCost}
                  totalSongs={this.state.totalSongs}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
