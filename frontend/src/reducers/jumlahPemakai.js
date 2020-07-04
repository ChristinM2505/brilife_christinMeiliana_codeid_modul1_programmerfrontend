import {
    SAVE_PEMAKAI_REQUEST,SAVE_PEMAKAI_SUCCESS,SAVE_PEMAKAI_FAILURE,
    FIND_PEMAKAI_REQUEST,FIND_PEMAKAI_SUCCESS,FIND_PEMAKAI_FAILURE,
} from '../action/constant';

const defaultState = {data:null,loading:false,error:null};

export function saveJumlahPemakai(state = defaultState,action){
    switch(action.type){
        case SAVE_PEMAKAI_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            };
        case SAVE_PEMAKAI_SUCCESS:
            return{
                data : action.data,
                loading:false,
                error:null
            };
        case SAVE_PEMAKAI_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.error
            };
        default:
        return state;
    }
}
      
export function findJumlahPemakai(state = defaultState,action){
    switch(action.type){
        case FIND_PEMAKAI_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            };
        case FIND_PEMAKAI_SUCCESS:
            return{
                data : action.data,
                loading:false,
                error:null
            };
        case FIND_PEMAKAI_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.error
            };
        default:
        return state;
    }
}
