/**
* @Author: Roxy Chen
* @Date:   2016-08-17T18:00:27+08:00
* @Last modified by:   Roxy Chen
* @Last modified time: 2016-08-19T05:55:52+08:00
* @License: Copyright (c) by Giftpack Inc. All Rights Reserved.
*/



import './sass/style.scss';
import React , { Component } from 'react';
import reactDom from 'react-dom';
// import Routes from './script/tool/routes';
import Index from './script/component/index';

reactDom.render( <Index/>, document.getElementById('main'));
