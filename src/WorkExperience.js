import React, { Component } from "react";

class WorkExperience extends Component{
    render(){
        return (
            <div>
                <div className="body_sec2">
                    <div className="title2"><b>{this.props.workExperience.title}</b></div>
                    <div className="body_sec2_par">
                        <div><b>{this.props.workExperience.job1}</b></div>
                        <div>{this.props.workExperience.job1Content}</div>
                        <div><b>{this.props.workExperience.job2}</b></div>
                        <div>{this.props.workExperience.job2Content}</div>
                    </div>
                </div>
                <div className="divider">____________________________________________________________________________________________________________</div>
            </div>
        );
    }
}

export default WorkExperience;