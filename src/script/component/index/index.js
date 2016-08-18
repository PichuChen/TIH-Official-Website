/**
* @Author: Roxy Chen
* @Date:   2016-08-17T18:10:52+08:00
* @Last modified by:   Roxy Chen
* @Last modified time: 2016-08-19T06:17:05+08:00
* @License: Copyright (c) by Giftpack Inc. All Rights Reserved.
*/

import CountUp from '../../tool/Customize_Plugin/react-countup';
import Waypoint from 'react-waypoint';

import React, { Component , PropTypes } from 'react';
// import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/global';

import apple from '../../../images/icon/apple-download.png';
import android from '../../../images/icon//google-download.png';

import feature_1 from '../../../images/intro/1.jpg';
import feature_2 from '../../../images/intro/2.jpg';
import feature_3 from '../../../images/intro/3.jpg';
import feature_4 from '../../../images/intro/4.jpg';


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberTalksWayPoint: false,
      navFix: true
    };
  }
  componentDidMount(){}
  render() {
    const {
      numberTalksWayPoint,
      navFix
    } = this.state;
    return (
      <div className="main-container">
        <Navigator onTop={navFix}/>
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
        <Waypoint onEnter={()=>!navFix&&this.setState({navFix: true})} />
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
            <Waypoint onEnter={()=>navFix&&this.setState({navFix: false})} />
          </div>
        </section>
        <section className="section-3 vertical-flex-item">
          <div className="counts-container">
            <div className="title-group">
              <div className="title">Number Talks</div>
              <div className="sub-title">PROGRESS OF TIH IoT</div>
            </div>
            <Waypoint onEnter={()=>!numberTalksWayPoint&&this.setState({numberTalksWayPoint: true})} />
            <div className="services-use-count flex-row">
              <div className="count-display">
                <div className="total-counts"><CountUp run={numberTalksWayPoint} start={0} end={17} /></div>
                <div className="service-intro">BRANDS COOPERATE WITH TIH SERVICE</div>
              </div>
              <div className="count-display">
                <div className="total-counts"><CountUp run={numberTalksWayPoint} start={0} end={98721}/></div>
                <div className="service-intro">REQUESTS HAVE BEEN SENT ON TIH CLOUD</div>
              </div>
              <div className="count-display">
                <div className="total-counts"><CountUp run={numberTalksWayPoint} start={0} end={72}/></div>
                <div className="service-intro">DEVICES SUPPORT TIH CLOUD</div>
              </div>
            </div>
          </div>

        </section>
        <section className="section-4 vertical-flex-item">
          <div className="subscribe-container">
            <div className="subscribe-symbol email"><input placeholder="SUBSCRIBE EDM BY EMAIL"/></div>
            <div className="horizon"/>
            <div className="subscribe-symbol facebook vertical-flex-item"><div>FOLLOW US ON FACEBOOK</div></div>
          </div>
        </section>
        <footer className="vertical-flex-item">
          <div className="footer-container vertical-flex-item ">
            <div className="footer-brand">TAIWAN INTELLIGENT HOME</div>
            <div className="footer-copyright">All Rights Reserved 2016</div>
          </div>
        </footer>
      </div>
    );

  }
}


class Navigator extends Component {
  static propTypes = {
    onTop: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    onTop: true
  }
  constructor(props){
    super(props)
  }
  render(){
    const { onTop } = this.props;
    return(
      <div className={ onTop ? 'navbar-container vertical-flex-item' : 'navbar-container vertical-flex-item fixed'}>
      {!onTop && (<span className="brand-text">TAIWAN INTELLIGENT HOME</span>)}
        <div className={ onTop ? 'navbar flex-row' : 'navbar flex-row fixed'}>
          <div className="navgator link flex-row" >
            <div>DEVELOPER<span className="underline"/></div>
            { onTop && (<div>SERVICE<span className="underline"/></div>) }
            <div>BRANDS<span className="underline"/></div>
          </div>
          <div className="navgator login flex-row" >
            <div className={ onTop && 'login-btn'}>Login</div>
          </div>
        </div>
      </div> )
  }
}

// export default connect((state , ownProps ) => ( state ))( Index );
