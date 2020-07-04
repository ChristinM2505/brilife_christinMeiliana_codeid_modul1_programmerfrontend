import {
    FIND_KONTRASEPSI_REQUEST,FIND_KONTRASEPSI_SUCCESS,FIND_KONTRASEPSI_FAILURE,
  } from './constant';

import {commonAxios} from '../utils/ApiUtil';
  
  function sleep(delay, value) {
    return new Promise(function (resolve) { setTimeout(resolve, delay, value);});
  }

  export const findAll = () =>
    (dispatch) => {dispatch({type : FIND_KONTRASEPSI_REQUEST});
  
      commonAxios.get('kontrasepsi')
        .then(data =>  sleep(1000,data))
        .then(data => {dispatch(findKontrasepsiSucess(data));})
        .catch(error => {dispatch(findKontrasepsiFailure(error));})
    };
  
    function findKontrasepsiSucess(data) {
    return {type: FIND_KONTRASEPSI_SUCCESS,data : data}
    }
  
    function findKontrasepsiFailure(error) {
    return {type: FIND_KONTRASEPSI_FAILURE,error : error}
    }