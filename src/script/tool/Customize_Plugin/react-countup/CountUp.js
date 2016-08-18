/**
*
* npm 下來的套件是壞掉的 所以直接安裝源碼
*
* @Author: Roxy Chen
* @Date:   2016-08-19T03:07:25+08:00
* @Last modified by:   Roxy Chen
* @Last modified time: 2016-08-19T06:23:29+08:00
* @License: Copyright (c) by Giftpack Inc. All Rights Reserved.
*/


import React, { Component , PropTypes } from 'react';
import reactDom from 'react-dom';
import Count from './countup/dist/countUp.min';

export default class CountUp extends Component {

  static defaultProps = {
    run: false,
    start: 0,
    end: 2016,
    decimals: 0,
    duration: 10,
    useEasing: true,
    useGrouping: false,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: '',
  };

  static propTypes = {
    run: PropTypes.bool,
    className: PropTypes.node,
    style: PropTypes.object,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    decimals: PropTypes.number,
    duration: PropTypes.number,
    useEasing: PropTypes.bool,
    useGrouping: PropTypes.bool,
    separator: PropTypes.string,
    decimal: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    callback: PropTypes.func,
  };

  constructor(props){
    super(props);
    const {
      run,
      start,
      end,
      duration,
      useEasing,
      useGrouping,
      separator,
      decimals,
      decimal,
      prefix,
      suffix,
      callback,
    } = this.props;

    this.state = {
      run,
      start,
      end,
      duration,
      useEasing,
      useGrouping,
      separator,
      decimals,
      decimal,
      prefix,
      suffix,
      callback,
    };

  }

  componentDidMount() {
    this.startAnimation();
  }

  componentDidUpdate() {
    this.startAnimation();
  }

  startAnimation() {
    const {
      run,
      start,
      end,
      duration,
      useEasing,
      useGrouping,
      separator,
      decimals,
      decimal,
      prefix,
      suffix,
      callback,
    } = this.props;

    const countup = new Count(reactDom.findDOMNode(this), start, end, decimals, duration, {
      useEasing,
      useGrouping,
      separator,
      decimal,
      prefix,
      suffix,
    });

    run && countup.start(callback);
  }

  render() {
    const { className, start, style } = this.props;
    return (
      <span className={className} style={style}>{start}</span>
    );
  }
}
