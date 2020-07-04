import {
    FIND_PROPINSI_REQUEST,FIND_PROPINSI_SUCCESS,FIND_PROPINSI_FAILURE,
  } from './constant';

import {commonAxios} from '../utils/apiUtils';
  
  function sleep(delay, value) {
    return new Promise(function (resolve) { setTimeout(resolve, delay, value);});
  }

  export const findAll = () =>
    (dispatch) => {dispatch({type : FIND_PROPINSI_REQUEST});
  
      commonAxios.get('propinsi')
        .then(data =>  sleep(1000,data))
        .then(data => {dispatch(findPropinsiSucess(data));})
        .catch(error => {dispatch(findPropinsiFailure(error));})
    };
  
    function findPropinsiSucess(data) {
    return {type: FIND_PROPINSI_SUCCESS,data : data}
    }
  
    function findPropinsiFailure(error) {
    return {type: FIND_PROPINSI_FAILURE,error : error}
    }