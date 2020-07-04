import {findPropinsi} from './propinsi';
import {findJumlahPemakai,saveJumlahPemakai} from './jumlahPemakai';
import {findKontrasepsi} from './kontrasepsi';

import {combineReducers} from 'redux';

export default combineReducers({
    findPropinsi,findKontrasepsi,saveJumlahPemakai, findJumlahPemakai
});