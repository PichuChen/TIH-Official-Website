/**
* @Author: Roxy Chen
* @Date:   2016-08-17T18:10:52+08:00
* @Last modified by:   Roxy Chen
* @Last modified time: 2016-08-20T03:39:13+08:00
* @License: Copyright (c) by Giftpack Inc. All Rights Reserved.
*/

import CountUp from '../../tool/Customize_Plugin/react-countup';
import Waypoint from 'react-waypoint';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component , PropTypes } from 'react';
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

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceWaypoint: false,
      landingWaypoint: false,
      numberTalksWayPoint: false,
      navFix: true
    };
  }
  componentDidMount(){}
  render() {
    const {
      serviceWaypoint,
      landingWaypoint,
      numberTalksWayPoint,
      navFix
    } = this.state;
    return (
      <div className="main-container">
        <Navigator onTop={navFix}/>
        <section className="section-1 vertical-flex-item">
        <Waypoint onEnter={()=>!landingWaypoint&&this.setState({landingWaypoint: true})} />
          <div className="landing-container">
            <AnimateEffect trigger={landingWaypoint} className={"brand"} effect={"fadeInUp"} delay={2000} >TAIWAN INTELLIGENT HOME</AnimateEffect>
            <AnimateEffect trigger={landingWaypoint} className={"title"} effect={"fadeIn"} delay={1000} >MAKE SMART HOME SMARTER</AnimateEffect>
            <AnimateEffect trigger={landingWaypoint} className={"sub-title"} effect={"fadeInDown"} delay={1500} >CONTROL SMART HOME IN A SINGLE APP</AnimateEffect>
            <div className="download-group">
              <AnimateEffect trigger={landingWaypoint} className={"download"} effect={"fadeInDown"} delay={2500} > DOWNLOAD ON </AnimateEffect>
              <div className="link">
                <AnimateEffect trigger={landingWaypoint} effect={"fadeInUp"} delay={3000} >
                  <a href="#"><img src={apple} width="172"/></a>
                </AnimateEffect>
                <AnimateEffect trigger={landingWaypoint} effect={"fadeInUp"} delay={3100} >
                  <a href="#"><img src={android} width="172"/></a>
                </AnimateEffect>
              </div>
            </div>
          </div>
        <Waypoint onEnter={()=>!navFix&&this.setState({navFix: true})} />
        </section>
        <section className="section-2 vertical-flex-item">
        <Waypoint onEnter={()=>!serviceWaypoint&&this.setState({serviceWaypoint: true})} />
          <div className="service-container">
            <div className="title-group">
              <div className="title">Our Service</div>
              <div className="sub-title">WHAT YOU CAN DO WITH TIH</div>
            </div>
            <div className="service-features flex-row">
              <AnimateEffect trigger={serviceWaypoint} className={"feature"} effect={"fadeInUp"} delay={800} >
                <div className="feature-image"><img src={feature_1}/><div className="overlay"/></div>
                <div className="feature-content">
                  <div className="feature-content-title">IoT Integration</div>
                  <p> Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. </p>
                </div>
              </AnimateEffect>
              <AnimateEffect trigger={serviceWaypoint} className={"feature"} effect={"fadeInUp"} delay={600} >
                <div className="feature-image"><img src={feature_2}/><div className="overlay"/></div>
                <div className="feature-content">
                  <div className="feature-content-title">All-In-One Control</div>
                  <p> Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. </p>
                </div>
              </AnimateEffect>

              <AnimateEffect trigger={serviceWaypoint} className={"feature"} effect={"fadeInUp"} delay={700} >
                <div className="feature-image"><img src={feature_3}/><div className="overlay"/></div>
                <div className="feature-content">
                  <div className="feature-content-title">IoT Integration</div>
                  <p> Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. </p>
                </div>
              </AnimateEffect>

              <AnimateEffect trigger={serviceWaypoint} className={"feature"} effect={"fadeInUp"} delay={900} >
                <div className="feature-image"><img src={feature_4}/><div className="overlay"/></div>
                <div className="feature-content">
                  <div className="feature-content-title">IoT Integration</div>
                  <p> Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. </p>
                </div>
              </AnimateEffect>

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
                <div className="total-counts"><CountUp trigger={numberTalksWayPoint} start={0} end={17} /></div>
                <div className="service-intro">BRANDS COOPERATE WITH TIH SERVICE</div>
              </div>
              <div className="count-display">
                <div className="total-counts"><CountUp trigger={numberTalksWayPoint} start={0} end={98721}/></div>
                <div className="service-intro">REQUESTS HAVE BEEN SENT ON TIH CLOUD</div>
              </div>
              <div className="count-display">
                <div className="total-counts"><CountUp trigger={numberTalksWayPoint} start={0} end={72}/></div>
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

class AnimateEffect extends Component {
  static propTypes = {
    trigger: PropTypes.bool.isRequired ,
    className:PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired ,
    effect: PropTypes.string.isRequired,
  };

  static defaultProps = {
    trigger: false ,
    className: '',
    delay: 0,
    effect: '',
  }

  constructor() {
    super()
    this.state = { effect: '' }
  }

  setEffect (effect) {
    this.setState({ effect })
  }

  render() {
    const {
      trigger , className, children , delay , effect
    } = this.props;
    trigger && setTimeout(()=>this.setEffect(effect) , delay );

    return(
      <div
        style={{opacity: 0}}
        className={ className + ' ' + this.state.effect + ' animated'}
        >
        { children }
      </div>
    )
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
            <AnimateEffect trigger={true} effect={"fadeInDown"} delay={200} >DEVELOPER<span className="underline"/></AnimateEffect>
{ onTop && (<AnimateEffect trigger={true} effect={"fadeInDown"} delay={400} >SERVICE<span className="underline"/></AnimateEffect>) }
            <AnimateEffect trigger={true} effect={"fadeInDown"} delay={600} >BRANDS<span className="underline"/></AnimateEffect>
          </div>
          <div className="navgator login flex-row" >
            <div className={ onTop && 'login-btn'}>Login</div>
          </div>
        </div>
      </div> )
  }
}

// export default connect((state , ownProps ) => ( state ))( Index );
