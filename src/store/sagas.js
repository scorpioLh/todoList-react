import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from "./actionCreators";
import axios from 'axios'

function* getInitList() {
	try{
		const res = yield axios.get('/list.json')
		const action = initListAction(res.data)
		yield put(action)
	} catch(e) {
		console.log('list.json 请求失败')
	}
}

// generator 函数
function* mySaga() {
	yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;