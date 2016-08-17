import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/global';
import logo from '../../../images/logo-pink@2x.png'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){}
  render() {
    return (
      <div className="container">
        <div className="hello">
          <img width="69" src={logo} />
          <div>GiftPack</div>
          <div>Redux React Generator</div>
          <a target="_blank" href="https://github.com/VANITAX/Front-end-Redux-React-Generator/wiki/Introduction">Documentation</a>
          <div>v1.0.0</div>
        </div>
      </div>
    );
  }
}

export default connect((state , ownProps ) => ( state ))( Index );
