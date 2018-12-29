import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux的Chrome调试工具需要该参数
)

export default store