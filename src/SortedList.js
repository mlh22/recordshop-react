import React from "react";
import ReactDOM from "react-dom";
import {Typography} from '@material-ui/core'
import Albums from './Albums';

class SortedList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    onSortYear = event=> {
        const selectedType = event.target.value;
        this.setState({ sorttype: selectedType });
        console.log(selectedType);
    };

    sortMethod = (a,b) => {
        if (this.props.sortStyle === "defaultSort"){
            return this.defaultMethod(a,b);
        } else if (this.props.sortStyle === "newToOld"){
            return this.newToOldSort(a,b);
        } else if (this.props.sortStyle === "oldToNew"){
            return this.oldToNewSort(a,b);
        }
    };

    newToOldSort = (a,b) =>{
        if (a.year < b.year){
            return 1;
        } else if (a.year >= b.year){
            return -1;
        } else {
            return 0;
        }
    };

    oldToNewSort = (a,b) =>{
        if (a.year < b.year){
            return -1;
        } else if (a.year >= b.year){
            return 1;
        } else {
            return 0;
        }
    };

    defaultMethod = (a,b) =>{
        if (a.album.toUpperCase() > b.album.toUpperCase()){
            return 1;
        } else if (a.album.toUpperCase() < b.album.toUpperCase()){
            return -1;
        } else {
            return 0;
        }
    };

    textstyle = {
        marginLeft:"10vw",
    }


    render(){
        const amount = this.props.list.length;
        return(
            <div>
                <Typography variant="h6" style={this.textstyle}>Displaying {amount} results.</Typography>
                <Albums list={this.props.list.sort(this.sortMethod)} addToCart={this.props.addToCart}/>
            </div>
        );
    }
}

export default SortedList;