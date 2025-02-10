import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
        <div className="header">
            <div className="header_sect1">
                <p><b>{this.props.personInfo.name}</b></p>
                <p>{this.props.personInfo.occupation}</p>
            </div>
            <div className="header_sect2">
            <p>Email: <a className="link" href={`mailto:${this.props.contactInfo.email}`}>{this.props.contactInfo.email}</a></p>
                <p>Web: {this.props.contactInfo.web}</p>
                <p>Mobile: {this.props.contactInfo.mobile}</p>
            </div>
      </div>
    );
  }
}

export default Header;