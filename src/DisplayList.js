import React from "react";
import ReactDOM from "react-dom";
import {  } from '@material-ui/core';
import Albums from "./Albums"

class DisplayList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.list.map(item => 
                <li>{item.album}, {item.artist}, {item.genre}, {item.decade}</li>)}

                {this.props.list.map(
                    item => <Albums>album={item.album}
                                        artist={item.artist}
                                        year={item.year}
                                        decade={item.decade}
                                        genre={item.genre}
                                        imagesrc={item.imagesrc}</Albums>
                )}
            </div>
        );
    }
}
export default DisplayList;