import React, { Component } from "react";

class Education extends Component {

    render() {
        return (
            <div className="body_sec4">
                <div className="title4"><b>{this.props.education.title}</b></div>
                <div className="body_sec4_par">
                    <p><b>{this.props.education.bsInstitution}</b></p>
                    <p>{this.props.education.bsDegree}</p>
                    <p>{this.props.education.bsDates}</p>
                    <p>{this.props.education.bsGpa}</p>
                    <p><b>{this.props.education.msInstitution}</b></p>
                    <p>{this.props.education.msDegree}</p>
                    <p>{this.props.education.msDates}</p>
                    <p>{this.props.education.msGpa}</p>
                </div>
            </div>
        );
    }
}

export default Education;