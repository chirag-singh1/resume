import React, { Component } from 'react';
import Star from './Star';
import FilledStar from './FilledStar';
import './SkillTile.css';

export default class SkillTile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const num=parseInt(this.props.num);
        let fstars=[...Array(num)].map((e, i) => <FilledStar/>)
        let estars=[...Array(5-num)].map((e, i) => <Star/>)
        return(
            <div class="SkillTile">
                <h3>{ this.props.title }</h3>
                <div class="Stars">
                    {fstars}
                    {estars}
                </div>
            </div>
        );
    }
}