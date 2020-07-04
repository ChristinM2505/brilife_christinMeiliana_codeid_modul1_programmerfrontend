import {
    //SAVE_PROPINSI_REQUEST,SAVE_PROPINSI_SUCCESS,SAVE_PROPINSI_FAILURE,
    FIND_PROPINSI_REQUEST,FIND_PROPINSI_SUCCESS,FIND_PROPINSI_FAILURE,
} from '../action/constant';

const defaultState = {data:null,loading:false,error:null};

// export function savePropinsi(state = defaultState,action){
//     switch(action.type){
//         case SAVE_PROPINSI_REQUEST:
//             return{
//                 ...state,
//                 loading:true,
//                 error:null
//             };
//         case SAVE_PROPINSI_SUCCESS:
//             return{
//                 data : action.data,
//                 loading:false,
//                 error:null
//             };
//         case SAVE_PROPINSI_FAILURE:
//             return{
//                 ...state,
//                 loading:false,
//                 error:action.error
//             };
//         default:
//         return state;
//     }
// }
      
export function findPropinsi(state = defaultState,action){
    switch(action.type){
        case FIND_PROPINSI_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            };
        case FIND_PROPINSI_SUCCESS:
            return{
                data : action.data,
                loading:false,
                error:null
            };
        case FIND_PROPINSI_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.error
            };
        default:
        return state;
    }
}
