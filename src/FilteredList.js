import React from "react";
import ReactDOM from "react-dom";
import { InputLabel, Select, MenuItem } from '@material-ui/core'
import SortedList from './SortedList';

class FilteredList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            genre: "genreall",
            decade: "decadeall",
            sorttype: "defaultSort"
        };
    }

    onSelectFilterGenre = event =>{
        const genreVal = event.target.value;
        this.setState({ genre: genreVal });
        console.log(genreVal);
    };

    onSelectFilterDecade = event =>{
        const decadeVal = event.target.value;
        this.setState({ decade: decadeVal });
        console.log(decadeVal);

    };

    onSortYear = event=> {
        const selectedType = event.target.value;
        this.setState({ sorttype: selectedType });
        console.log(selectedType);
    };

    //conditions: if all filters are set to all, return true
    //else, checks each filter - if a filter is not set to all and it doesn't match item, returns false
    //at the end, things that come out match all set parameters
    matchesFilters = item =>{
        if (this.state.genre === "genreall" && this.state.decade === "decadeall"){
            return true
        } else if ((this.state.genre !== "genreall") && (item.genre !== this.state.genre)){
            return false
        } else if ((this.state.decade !== "decadeall") && (item.decade !== this.state.decade)){
            return false
        } else {
            return true
        }
    };

    formStyle = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding:"1vw",
        flexWrap: "wrap",
        align:"center",
        justifyContent:"center",
    };

    questionStyle ={
        marginRight:"3vw",
    };


    render(){
        return(
            <div>
                <form margin="normal" style={this.formStyle}>
                    <div style={this.questionStyle}>
                        <InputLabel>Find by Genre:</InputLabel>
                        <Select onChange={this.onSelectFilterGenre} style={{margin: '15px'}} defaultValue={"genreall"}>
                            <MenuItem value="" disabled>Genre</MenuItem>
                            <MenuItem value={"genreall"}>All</MenuItem>
                            <MenuItem value={"kpop"}>K-Pop</MenuItem>
                            <MenuItem value={"pop"}>Pop</MenuItem>
                            <MenuItem value={"rock"}>Rock</MenuItem>
                        </Select>
                    </div>

                    <div style={this.questionStyle}>
                        <InputLabel>Find by Decade:</InputLabel>
                        <Select onChange={this.onSelectFilterDecade} style={{margin: '15px'}} defaultValue={"decadeall"}>
                            <MenuItem value="" disabled>Decades</MenuItem>
                            <MenuItem value={"decadeall"}>All</MenuItem>
                            <MenuItem value={"2020"}>2020s</MenuItem>
                            <MenuItem value={"2010"}>2010s</MenuItem>
                            <MenuItem value={"2000"}>2000s</MenuItem>
                            <MenuItem value={"19-anything"}>Pre-2000</MenuItem>
                        </Select>
                    </div>


                    <div style={this.questionStyle}>
                        <InputLabel>Sort by:</InputLabel>
                        <Select onChange={this.onSortYear} style={{margin: '15px'}} defaultValue={"defaultSort"}>
                            <MenuItem value="" disabled>Sort Methods</MenuItem>
                            <MenuItem value={"defaultSort"}>Alphabetical</MenuItem>
                            <MenuItem value={"newToOld"}>Newest to Oldest</MenuItem>
                            <MenuItem value={"oldToNew"}>Oldest to Newest</MenuItem>
                        </Select>
                    </div>

                    
                </form>
                
                <SortedList list={this.props.list.filter(this.matchesFilters)} sortStyle={this.state.sorttype} addToCart={this.props.addToCart}/>
                
            </div>
        );
        
    }

}

export default FilteredList;