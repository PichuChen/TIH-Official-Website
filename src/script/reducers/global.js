import { global } from '../constants/actionTypes';
import createReducer from '../utils/createReducer';
import { Map } from 'immutable';

const state = new Map({
  CURRENT_LANGUAGE: 'EN',
  JSON_LANGUAGE_PACKAGE: {}
});
const types = global;

const GET_JSON_LANGUAGE_PACKAGE = ( state, action ) => {
  return state; 
}

const LANGUAGE_PACKAGE_SWITCH = ( state, action ) => {
  return state.set('CURRENT_LANGUAGE' , action.language); 
}

const handlers = {
  [ types.GET_JSON_LANGUAGE_PACKAGE ]: GET_JSON_LANGUAGE_PACKAGE,
  [ types.LANGUAGE_PACKAGE_SWITCH ]: LANGUAGE_PACKAGE_SWITCH
}

export default createReducer( state , handlers );
