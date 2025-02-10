import React, { Component } from "react";

class PersonalProfile extends Component{
    render(){
        return (
            <div>
                <div className="body_sec1">
                    <div className="title1"><b>{this.props.profile.title}</b></div>
                    <div className="body_sec1_par">{this.props.profile.content}</div>
                </div>
                <div className="divider">____________________________________________________________________________________________________________</div>
            </div>
        );
    }
}

export default PersonalProfile;