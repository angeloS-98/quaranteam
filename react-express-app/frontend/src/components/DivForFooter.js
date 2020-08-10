import React, { Component } from 'react';

const style = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  minHeight: "55%",
  height: "auto !important",
};

class DivForFooter extends Component{
    render(){
        return(
            <div style={style}>
                <div className="align-self-center">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DivForFooter;