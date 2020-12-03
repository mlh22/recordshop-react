import React from "react";
import ReactDOM from "react-dom";
import {Typography} from '@material-ui/core'
import Albums from './Albums';

class SortedList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    //obtains information on sort method from filteredlist and sends information to the appropriate comparator
    sortMethod = (a,b) => {
        if (this.props.sortStyle === "defaultSort"){
            return this.defaultMethod(a,b);
        } else if (this.props.sortStyle === "newToOld"){
            return this.newToOldSort(a,b);
        } else if (this.props.sortStyle === "oldToNew"){
            return this.oldToNewSort(a,b);
        }
    };

    //year by new to old sort - creates comparator based on year
    newToOldSort = (a,b) =>{
        if (a.year < b.year){
            return 1;
        } else if (a.year >= b.year){
            return -1;
        } else {
            return 0;
        }
    };

    //year by old to new sort - creates comparator based on year
    oldToNewSort = (a,b) =>{
        if (a.year < b.year){
            return -1;
        } else if (a.year >= b.year){
            return 1;
        } else {
            return 0;
        }
    };

    //alphabetical sort - creates comparator based on the letters and the alphabet
    defaultMethod = (a,b) =>{
        if (a.album.toUpperCase() > b.album.toUpperCase()){
            return 1;
        } else if (a.album.toUpperCase() < b.album.toUpperCase()){
            return -1;
        } else {
            return 0;
        }
    };

    //styling for the display of the number of results
    textstyle = {
        marginLeft:"10vw",
    }


    render(){
        const amount = this.props.list.length;
        return(
            <div>
                <Typography variant="h6" style={this.textstyle}>Displaying {amount} results.</Typography>
                {/* sends the sorted list to Albums to be rendered into cards */}
                <Albums list={this.props.list.sort(this.sortMethod)} addToCart={this.props.addToCart}/>
            </div>
        );
    }
}

export default SortedList;