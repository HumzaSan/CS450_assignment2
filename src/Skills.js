import React, { Component } from "react";

class Skills extends Component{
    render(){
        return(
            <>
            <div className="body_sec3">
                <div className="title3"><b>{this.props.keySkills.title}</b></div>
                <div className="body_sec3_par">
                    <div className="test1">
                        <div>{this.props.keySkills.content1}</div>
                        <div>{this.props.keySkills.content1}</div>
                        <div>{this.props.keySkills.content1}</div>
                    </div>
                    <div className="test2">
                        <div>{this.props.keySkills.content1}</div>
                        <div>{this.props.keySkills.content1}</div>
                        <div>{this.props.keySkills.content1}</div>
                    </div>
                    <div className="test3">
                        <div>{this.props.keySkills.content1}</div>
                        <div>{this.props.keySkills.content1}</div>
                        <div>{this.props.keySkills.content1}</div>
                    </div>
                </div>
            </div>
            <div className="divider">____________________________________________________________________________________________________________</div>
            </>
        );
    }
}

export default Skills;