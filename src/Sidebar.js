import './Sidebar.css';
import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Sidebar extends Component{

    constructor(props){
        super();
        this.state = {
            active: false,
        }
        this.toggleActive=this.toggleActive.bind(this);
    }
    
    toggleActive(){
        const state=this.state.active;
        this.setState({
            active: !state,
        })
    }

    render(){ 
        return(
            <div class={this.state.active ? "sidebar change" : "sidebar"}>
                <div class={this.state.active ? "container change" : "container"} onClick={this.toggleActive}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <ul class="SideList">
                    <li class="SideItem" onClick={() => this.props.handleClick(0)}>Home</li>
                    <li class="SideItem" onClick={() => this.props.handleClick(1)}>Education</li>
                    <li class="SideItem" onClick={() => this.props.handleClick(2)}>Experience</li>
                    <li class="SideItem" onClick={() => this.props.handleClick(3)}>Projects</li>
                    <li class="SideItem" onClick={() => this.props.handleClick(4)}>Skills</li>
                </ul>
            </div>
        
        )
    }
};

export default Sidebar;