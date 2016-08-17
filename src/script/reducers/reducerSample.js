import { <types_group> } from '../constants/actionTypes';

import createReducer from '../utils/createReducer';
import { Map } from 'immutable';

const types = <types_group>;
const state = new Map({})

const < TYPE_NAME > = ( state, action ) => { 
  return state;
}

const handlers = {
  [ types.< TYPE_NAME > ]: <TYPE_NAME>
}

export default createReducer( state , handlers );
