/**
* @Author: Roxy Chen
* @Date:   2016-08-17T18:10:52+08:00
* @Last modified by:   Roxy Chen
* @Last modified time: 2016-08-18T18:29:06+08:00
* @License: Copyright (c) by Giftpack Inc. All Rights Reserved.
*/


import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/global';
import apple from '../../../images/icon/apple-download.png';
import android from '../../../images/icon//google-download.png';

import feature_1 from '../../../images/intro/1.jpg';
import feature_2 from '../../../images/intro/2.jpg';
import feature_3 from '../../../images/intro/3.jpg';
import feature_4 from '../../../images/intro/4.jpg';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){}
  render() {
    return (
      <div className="main-container">
        <div className="navbar-container vertical-flex-item">
          <div className="navbar flex-row">
            <div className="navgator link flex-row" >
              <div>DEVELOPER<span className="underline"/></div>
              <div>SERVICE<span className="underline"/></div>
              <div>BRANDS<span className="underline"/></div>
            </div>
            <div className="navgator login flex-row" >
              <div>Login</div>
            </div>
          </div>
        </div>
        <section className="section-1 vertical-flex-item">
          <div className="landing-container">
            <div className="brand">TAIWAN INTELLIGENT HOME</div>
            <div className="title">MAKE SMART HOME SMARTER</div>
            <div className="sub-title">CONTROL SMART HOME IN A SINGLE APP</div>
            <div className="download-group">
              <div className="download"> DOWNLOAD ON </div>
              <div className="link">
                <a href="#"><img src={apple} width="172"/></a>
                <a href="#"><img src={android} width="172"/></a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-2 vertical-flex-item">
          <div className="service-container">
            <div className="title-group">
              <div className="title">Our Service</div>
              <div className="sub-title">WHAT YOU CAN DO WITH TIH</div>
            </div>
            <div className="service-features flex-row">

              <div className="feature">
                <div className="feature-image"><img src={feature_1}/><div className="overlay"/></div>
                <div className="feature-content">
                  <div className="feature-content-title">IoT Integration</div>
                  <p> Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-image"><img src={feature_2}/><div className="overlay"/></div>
                <div className="feature-content">
                  <div className="feature-content-title">All-In-One Control</div>
                  <p> Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-image"><img src={feature_3}/><div className="overlay"/></div>
                <div className="feature-content">
                  <div className="feature-content-title">IoT Integration</div>
                  <p> Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-image"><img src={feature_4}/><div className="overlay"/></div>
                <div className="feature-content">
                  <div className="feature-content-title">IoT Integration</div>
                  <p> Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-3 vertical-flex-item"></section>
        <section className="section-4"></section>
        <footer></footer>
      </div>
    );

  }
}

export default connect((state , ownProps ) => ( state ))( Index );
