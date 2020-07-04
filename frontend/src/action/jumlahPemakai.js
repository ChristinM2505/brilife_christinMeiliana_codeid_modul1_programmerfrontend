import {
    FIND_PEMAKAI_REQUEST,FIND_PEMAKAI_SUCCESS,FIND_PEMAKAI_FAILURE,
    SAVE_PEMAKAI_REQUEST,SAVE_PEMAKAI_SUCCESS,SAVE_PEMAKAI_FAILURE,
  } from './constant';

import {commonAxios} from '../utils/ApiUtil';
  
  function sleep(delay, value) {
    return new Promise(function (resolve) { setTimeout(resolve, delay, value);});
  }

  export const findAll = () =>
    (dispatch) => {dispatch({type : FIND_PEMAKAI_REQUEST});
  
      commonAxios.get('pemakaiKontrasepsi')
        .then(data =>  sleep(1000,data))
        .then(data => {dispatch(findPemakaiSucess(data));})
        .catch(error => {dispatch(findPemakaiFailure(error));})
    };

  export const save = ({id,id_propinsi,id_kontrasepsi,jumlah_pemakai} = {}) =>
        (dispatch) => {dispatch ({ type : SAVE_PEMAKAI_REQUEST });

        const request = id ?
        commonAxios.put(`pemakaiKontrasepsi/${id}`,{id_propinsi,id_kontrasepsi,jumlah_pemakai}) :
        commonAxios.post('pemakaiKontrasepsi',{id_propinsi,id_kontrasepsi,jumlah_pemakai})

    request
    .then(data => sleep(1000, data))
    .then(data => {dispatch(savePemakaiSuccess(data));})
    .catch(error => {dispatch(savePemakaiFailure(error));})
  };
  
    function findPemakaiSucess(data) {
    return {type: FIND_PEMAKAI_SUCCESS,data : data}
    }
  
    function findPemakaiFailure(error) {
    return {type: FIND_PEMAKAI_FAILURE,error : error}
    }

    function savePemakaiSuccess(data){
        return {type: SAVE_PEMAKAI_SUCCESS,data : data}
        }
      
    function savePemakaiFailure(error){
        return {type: SAVE_PEMAKAI_FAILURE,error : error}
    }