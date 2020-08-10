import React, { Component } from 'react';
import DivForFooter from './DivForFooter';

class NotFound extends Component{
    render(){
        return (
          <DivForFooter>
            <h1>ERROR 404!</h1>
            <h3>Page not found...</h3>
          </DivForFooter>
        );
    }
}

export default NotFound;