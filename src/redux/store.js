
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {FETCH_PRODUCTS_PENDING} from './action';
import {
    fetchProductsSuccess,
    fetchProductsError,
} from "./action";
import data from "../table.json"


const getTeamManagementListRequest = async () => {
    console.log("calling....");
   
    
    return await new Promise((success, fail) => {
        setTimeout(() => {
          success(data.user);
        }, 1000);
      })
        .then(response => response)
        .catch(error => error);
      

};
function* getUserManagementListItems() {
    try {

       
        const response = yield call(getTeamManagementListRequest);
        console.log("getUserManagementListItems",response)
        yield put(fetchProductsSuccess(response));
    } catch (error) {
        yield put(fetchProductsError(error));
    }
}

export function* GetList() {
    yield takeEvery(FETCH_PRODUCTS_PENDING, getUserManagementListItems);
}

export default function* rootSaga() {
    yield all([fork(GetList)]);
}






























