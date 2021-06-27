import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component{
    constructor(props){
        super();
    }

    render(){
        var description=(this.props.description).map((item)=>
            <li>{ item }</li>
        );
        return (
            <div class="Tile">
                <div class="feature">
                    <img src= {this.props.image } class="image-accent"></img>
                    <div class = "feature-info">
                        <h3>{ this.props.title }</h3>
                        <div class = "sub-info">
                            <p>{ this.props.role }</p>
                            <p>{ this.props.location }</p>
                            <p>{ this.props.dates }</p>
                        </div>
                    </div>
                </div>
                <ul class="Description">
                    { description }
                </ul>
            </div>
        );
    };
}

export default Tile;